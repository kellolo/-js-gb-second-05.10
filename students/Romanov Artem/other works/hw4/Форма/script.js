function CustomValidation(input) {
	this.invalidities = [];
	this.validityChecks = [];
	this.inputNode = input;
	this.registerListener();
}

CustomValidation.prototype = {
	addInvalidity: function (message) {
		this.invalidities.push(message);
	},
	getInvalidities: function () {
		return this.invalidities.join('. \n');
	},
	checkValidity: function (input) {
		for (var i = 0; i < this.validityChecks.length; i++) {
			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			}
			var requirementElement = this.validityChecks[i].element;
			if (requirementElement) {
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}
			}
		}
	},
	checkInput: function () {
		this.inputNode.CustomValidation.invalidities = [];
		this.checkValidity(this.inputNode);
		if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
			this.inputNode.setCustomValidity('');
		} else {
			var message = this.inputNode.CustomValidation.getInvalidities();
			this.inputNode.setCustomValidity(message);
		}
	},
	registerListener: function () {
		var CustomValidation = this;
		this.inputNode.addEventListener('keyup', function () {
			CustomValidation.checkInput();
		});
	}
};

var usernameValidityChecks = [{
		isInvalid: function (input) {
			return input.value.length < 3;
		},
		invalidityMessage: 'Это поле должно содержать не менее 3 символов',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function (input) {
			var illegalCharacters = input.value.match(/[^а-яА-яёЁ]/g);
			return illegalCharacters ? true : false;
		},
		invalidityMessage: 'Допускаются только русские буквы',
		element: document.querySelector('label[for="username"] .input-requirements li:nth-child(2)')
	}
];

var phoneValidityChecks = [{
		isInvalid: function (input) {
			return input.value.length < 15 | input.value.length > 15;
		},
		element: document.querySelector('label[for="phone"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function (input) {
			return !input.value.match(/^\+7\([0-9]{3}\)[0-9]{3}[-]{1}[0-9]{4}$/);
		},
		invalidityMessage: 'Введите телефон в формате +7(123)456-7890',
		element: document.querySelector('label[for="phone"] .input-requirements li:nth-child(2)')
	},
];

var emailValidityChecks = [{
		isInvalid: function (input) {
			return input.value.length < 15 | input.value.length > 15;
		},
			element: document.querySelector('label[for="email"] .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function (input) {
			return !input.value.match(/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/);
		},
		invalidityMessage: 'Введиту e-mail  в формате mymail@mail.ru',
		element: document.querySelector('label[for="email"] .input-requirements li:nth-child(2)')
	},
];
var usernameInput = document.getElementById('username');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');

usernameInput.CustomValidation = new CustomValidation(usernameInput);
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

phoneInput.CustomValidation = new CustomValidation(phoneInput);
phoneInput.CustomValidation.validityChecks = phoneValidityChecks;

emailInput.CustomValidation = new CustomValidation(emailInput);
emailInput.CustomValidation.validityChecks = emailValidityChecks;

var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"');
var form = document.getElementById('registration');

function validate() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].CustomValidation.checkInput();
	}
}

submit.addEventListener('click', validate);
form.addEventListener('submit', validate);