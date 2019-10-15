class GoodsItem {
    constructor(name, price) {
        this.product_name = name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    makeGETRequest(url, callback) {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    }

    fetchGoods(callback) {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            callback();
            console.log(this.goods);
        })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.catalog').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});