class Order{
    static regexName = new RegExp(/[a-zA-Zа-яА-ЯёЁ']{2,}/, 'gi');
    static regexPhone = new RegExp(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/, 'gi');
    static regexEmail = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/, 'gi');

    constructor() {
        //this.name = name;
        //this.phone = phone;
        //this.email = email;
        //this.msg = msg;
        //alert(Order.regexName.test("Vs"));
        //console.log(Order.regexPhone.test("+7(000)000-0000"));
        alert(Order.regexEmail.test("vi.sergeev@yandex.ru"));
        alert(Order.regexEmail.test("dsfdsf"));
        alert(Order.regexEmail.test("mymail@mail.ru"));
        alert(Order.regexEmail.test("my-mail@mail.ru"));
    }

    checkName(target){

    }

    checkEmail(target){

    }

    checkPhoneNumber(target){

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
    /*let inputsOfOrder = document.querySelectorAll(".flex-order-form input");
    inputsOfOrder.forEach(inputValue=>{
        alert(inputValue.value);
    })
    */
    let order = new Order()
    localStorage.setItem("totalSum", 0);
});
    



 