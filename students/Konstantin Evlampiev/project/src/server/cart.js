const actionReg = require('./stats.js');


let add = (cart, req) => {
    try {
        cart.push(req.body);
        actionReg('add', req.body);
        return JSON.stringify(cart, null, 4);
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
    actionReg('modify', elem);
    return JSON.stringify(cart, null, 4);
};

/**
 * Удаляет товар из корзины. Совсем
 * @param {Cart} cart 
 * @param {Object} req 
 */
let remove = (cart, req) => {
    let neoCart = cart.filter(el => el.id !== Number(req.params.id));
    let el2 = cart.find(el => el.id === Number(req.params.id));
    actionReg('remove', el2);
    return JSON.stringify(neoCart, null, 4);
};

module.exports = {
    add,
    modify,
    remove
}