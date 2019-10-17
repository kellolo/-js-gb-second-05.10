let url = 'https://raw.githubusercontent.com/petr-sed/-js-gb-second-05.10/master/students/Sedukhin%20Petr/project/basa.JSON'
let urlgetcart = 'https://raw.githubusercontent.com/petr-sed/-js-gb-second-05.10/master/students/Sedukhin%20Petr/project/cart.JSON' 
let urlsendcart = 'https://github.com/petr-sed/-js-gb-second-05.10/edit/master/students/Sedukhin%20Petr/project/cart.JSON'

//                             ОБЪЕКТ XMLHttpRequest
// class getData{
//     constructor(url){
//         this.url = url
//         this.data = []
//         this._request(this.url, (cdata) => {this.data = JSON.parse(cdata)})
//     }
//     _request (url, callback){
//         let xhr = new XMLHttpRequest()
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 callback(xhr.responseText)
//             }
//         }
//         xhr.open('GET', url, true)
//         xhr.send()
//     }
// }           
// let goods = new getData(url)

//                               PROMISE
// class getData{
//     constructor(url){
//         this.url = url
//         this.data = []
//         this._getPromise()
//     }
//     _promiseAjax (url) {
//         return new Promise ((res, rej) => {
//             let xhr = new XMLHttpRequest()
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState === 4) {
//                     if (xhr.status === 200) {
//                         res (xhr.responseText)
//                     } else {
//                         rej ('some error')
//                     }
//                 }
//             }
//             xhr.open('GET', url, true)
//             xhr.send()
//         })
//     }   
//     _getPromise () {
//         this._promiseAjax (this.url)
//             .then ((data) => {
//                 this.data = JSON.parse(data)
//             })
//             .catch ((err) => {
//                 console.log (err)
//             })
//     }
// }  
// let goods = new getData(urlgetcart)

//                              FETCH
class getDataFetch{
    constructor(url){
        this.url = url
        this._getdata()
    }
    _getdata(){
        fetch (this.url)
        .then ((data) => data.json ()).then (dataParsed => {let catalog = new Catalog(dataParsed)})
        .catch ((err) => {
            console.log (err)
        })
    }
}

let data = new getDataFetch(url)