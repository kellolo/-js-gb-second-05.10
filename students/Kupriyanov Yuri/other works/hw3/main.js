let content = document.querySelector('.content')

let url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

let recvData = makeGETRequest(url, (catalogData) => {
    let arr = JSON.parse(catalogData)
    arr.forEach(element => {
       content.innerHTML += `id = ${element.id_product} name = ${element.product_name} <br>`
    });
})

function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

// А теперь через ...

 async function apiGetJSON(url) 
 {
        
    let jsonData = []
    //let url = `https://raw.githubusercontent.com/ymksoft/-js-gb-second-05.10/HW/3/students/Kupriyanov%20Yuri/project/db/db.json`
    
    let response = await fetch(url)
    if (response.ok) { 
        jsonData = await response.json()
    } else {
        console.log("Ошибка HTTP: " + response.status)
    }

    return jsonData;
}

function fetchProducts (url) {
    apiGetJSON (url)
        .then( (jsonData) => {
            jsonData.forEach( element => {
                content.innerHTML += `id = ${element.id_product} name = ${element.product_name} <br>`       
        })
    })
}

fetchProducts (url)