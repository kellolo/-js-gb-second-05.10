document.querySelector('.basket-button').addEventListener('click', function (e) {
  let dm = document.getElementsByClassName("basket-panel")[0];
  console.log(dm);
  if(dm.classList.contains("dropdown-menu")){
    dm.classList.remove("dropdown-menu");
    dm.classList.add("open-dropdown-menu");
    //e.target.innerHTML = "Корзина ▼"
  }
  else{
    dm.classList.remove("open-dropdown-menu");
    dm.classList.add("dropdown-menu");
    //e.target.innerHTML = "Корзина ▶"
  }
});