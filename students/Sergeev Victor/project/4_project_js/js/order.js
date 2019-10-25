class Order{
    regexName = new RegExp(/[a-zA-Zа-яА-ЯёЁ']{2,}/, 'gi');
    regexSurname = new RegExp(/[a-zA-Zа-яА-ЯёЁ']{2,}/, 'gi');
    regexPhone = new RegExp(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/, 'gi');
    regexEmail = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/, 'gi');

    constructor(surname, name, email, phone) {
        this.surname = surname;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.log = "ERROR:";

        this.checkName(this.name);
        this.checkSurname(this.surname);
        this.checkEmail(this.email);
        this.checkPhoneNumber(this.phone);

        if(this.log.length > 7){
            console.log(this.log);
            alert(this.log);
        }
        else {
            localStorage.setItem("totalSum", 0);
            alert("Спасибо, что выбрали нас! Ваш заказ принят! Ждите звонка, скоро свяжется наш оператор.");
        }
    }

    checkName(target){
        let isValid = this.regexName.test(target);
        if(!isValid){
            this.log+=" * проверьте, что в имени нет цифр и больше 2 букв\n"
        }
    }

    checkSurname(target){
        let isValid = this.regexSurname.test(target);
        if(!isValid){
            this.log+=" * проверьте, что в фамилии нет цифр и больше 2 букв\n"
        }
    }

    checkEmail(target){
        let isValid = this.regexEmail.test(target);
        if(!isValid){
            this.log+=" * почтовый адрес не является валидным\n"
        }
    }

    checkPhoneNumber(target){
        let isValid = this.regexPhone.test(target);
        if(!isValid){
            this.log+=" * номер телефона не поддерживает формат +7(000)000-0000\n";
        }
    }
}

let totalSum = document.getElementsByClassName("totalSumOfOrder")[0];

window.addEventListener("load", function(event) {
    totalSum.innerHTML = localStorage['totalSum'];
    //localStorage.removeItem('totalSum'); т к может быть обновление страницы
    console.log("Итоговая сумма к оплате = " + localStorage['totalSum']);
});

let orderbtn = document.getElementsByClassName("btn-submit")[0];
orderbtn.addEventListener('click', function (event) {
    let inputsOfOrder = document.querySelectorAll(".flex-order-form input");
    if(localStorage['totalSum']!= 0 && localStorage['totalSum'] != undefined){
        let order = new Order(inputsOfOrder[0].value, inputsOfOrder[1].value, 
            inputsOfOrder[2].value, inputsOfOrder[3].value);
    }
    else{
        alert("Корзина товаров пуста!");
    }
});
    



 