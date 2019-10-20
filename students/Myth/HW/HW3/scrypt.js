

let urlAPI = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

function request(url, callback) {
    let xhr = new XMLHttpRequest()
     console.log(xhr)
     xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText)
        }
    };
     xhr.open('GET', url, true)
    xhr.send()
}
 function handler(data) {
    console.log(data)
}
 request(urlAPI, handler)


 //PROMISE
 function promiseAjax (url) {
    return new Promise ((res, rej) => {
        let xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    res(xhr.responseText);
                } else {
                    rej('some error');
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    })
}



function getPromise() {
    promiseAjax(urlAPI)
        .then((data) =>{
            console.log(JSON.parse(data));
        })
        .catch((err) => {
            console.log(err);
        })
}
getPromise();
 let data = fetch(urlAPI)
    .then((data) => data.json()).then(dataParsed => {console.log(dataParsed);})
    .catch((err) => {
        console.log(err)
     })
