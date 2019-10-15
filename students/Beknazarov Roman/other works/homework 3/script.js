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

    makeGETRequest(url) {
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

    fetchGoods() {
        const API_URL = 'https://raw.githubusercontent.com/paradoxalyty/online-store-api-example/master';

        /*this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            //callback();
            console.log(this.goods);
        });*/

        this.makeGETRequest(`${API_URL}/catalogData.json`)
            .then((data) =>{
                this.goods = JSON.parse(data);
                this.render(this.goods);
            })
            .catch((err) => {
                console.log(err);
            });
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

list.fetchGoods(() => {});
