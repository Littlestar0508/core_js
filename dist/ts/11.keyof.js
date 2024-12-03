const person = {
    name: "tiger",
    age: 35,
};
function getProperty(obj, key) {
    return obj[key];
}
getProperty(person, "name");
function validCssProperty(prop) {
    return prop in document.body.style;
}
validCssProperty("color");
const product = {
    id: 1,
    name: "mac-book",
    price: 300,
};
function setProperty(product, key, value) {
    product[key] = value;
    return product;
}
setProperty(product, "price", 100);
const products = [
    { name: "mac", price: 500 },
    { name: "iPhone", price: 300 },
    { name: "iPad", price: 300 },
];
function getProperties(arr, key) {
    return arr.map((index) => index[key]);
}
getProperties(products, "name");
export {};
