//Object property shorthand
const name = "ABC"
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Earth'
}

console.log(user)

//object destructure
const produce = {
    label: 'Note book',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//const label = produce.label
//const stock = produce.stock
const { label, stock } = produce

console.log(label)
console.log(stock)

//rename the variable
const { label: productLabel, stock: productStock } = produce
console.log(productLabel)
console.log(productStock)

//default value for non exisiting variable , like rating 
const { label: productLabel2, stock: productStock2, rating = 5 } = produce
console.log(rating)

//destructure function argument
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}


transaction('order', produce)
