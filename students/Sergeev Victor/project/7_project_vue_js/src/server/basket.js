let add = (basket, req) => {
    basket.contents.push (req.body)
    return {newCart: JSON.stringify (basket, null, 4), name: req.body.product_name} 
}

let change = (basket, req) => {
    let find = basket.contents.find (el => el.id_product === +req.params.id)
    find.quantity += +req.body.quantity
    return {newCart: JSON.stringify (basket, null, 4), name: find.product_name} 
}

let remove = (basket, req) => {
    let find = basket.contents.find (el => el.id_product === +req.params.id)
    basket.contents.splice (basket.contents.indexOf (find), 1)
    return {newCart: JSON.stringify (basket, null, 4), name: find.product_name}
}

module.exports = {
    add, change, remove
}