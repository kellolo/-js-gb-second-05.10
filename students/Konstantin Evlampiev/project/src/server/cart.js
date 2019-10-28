let add = (cart, req) => {
    try {
        console.log(cart);
        cart.contents.push(req.body);
        return JSON.stringify(cart, null, 4);
    } catch (err) {
        console.log(err);
        console.dir(req.body);

    }

};
let modify = (cart, req) => {
    let elem = cart.contents.find(el => el.id === Number(req.params.id));
    elem.quantity += Number(req.body.quantity);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    modify
}