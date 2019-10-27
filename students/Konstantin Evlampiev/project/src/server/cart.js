let add = (cart, obj) => {
    cart.contents.push(obj);
    return JSON.stringify(cart, null, 4);
};
let modify = (cart, obj) => {
    let elem = cart.contents.find(el => el.id === obj.params.id);
    elem.quantity += obj.quantity;
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    modify
}