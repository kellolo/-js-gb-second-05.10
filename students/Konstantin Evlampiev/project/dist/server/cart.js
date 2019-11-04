const actionReg = require('./stats.js');


let add = (cart, req) => {
    try {
        cart.push(req.body);
        //        actionReg('add', req.body);
        return {
            basket: cart,
            name: req.body.title
        };
    } catch (err) {
        console.log(err);
    }

};

/**
 * Перезаписывает количество у заданного элемента
 * @param {Cart} cart объект корзины 
 * @param {Object} req Объект запроса 
 */
let modify = (cart, req) => {
    let elem = cart.find(el => el.id === Number(req.params.id));
    elem.quantity = Number(req.body.quantity);
    return {
        basket: cart,
        name: elem.title
    };
};

/**
 * Удаляет товар из корзины. Совсем
 * @param {Cart} cart 
 * @param {Object} req 
 */
let remove = (cart, req) => {
    let neoCart = cart.filter(el => el.id !== Number(req.params.id));
    let el2 = cart.find(el => el.id === Number(req.params.id));
    //actionReg('remove', el2);
    return {
        basket: neoCart,
        name: el2.title
    }
};

module.exports = {
    add,
    modify,
    remove
}