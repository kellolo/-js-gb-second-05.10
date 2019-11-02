let add = (cart, req) => {
    cart.contents.push(req.body);
    return {newCart: JSON.stringify(cart, null, 4), name: req.body.product_name};
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return {newCart: JSON.stringify(cart, null, 4), name: find.product_name};
};
let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    return {newCart: JSON.stringify(cart, null, 4), name: find.product_name};
};

module.exports = {
    add,
    change,
    remove
};