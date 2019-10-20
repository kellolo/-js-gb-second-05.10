window.addEventListener("load", function(event) {
    let totalSum = document.getElementsByClassName("totalSumOfOrder")[0];
    totalSum.innerHTML = localStorage['totalSum'];
    localStorage.removeItem('totalSum');
    console.log("Итоговая сумма к оплате = " + localStorage['totalSum']);
});

class Order{
    constructor(name, phone, email, msg) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.msg = msg;
    }
}