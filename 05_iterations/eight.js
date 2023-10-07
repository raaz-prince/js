const myNums = [1,2,3,4,5,6,7,8,9,10]

//reduce method is used to add all the values in arrays and we have to give starting value and the function returns a value so we have to store it 
const myTotal = myNums.reduce( function(acc,currentValue) {
    //console.log(`acc ${acc}  currentValue ${currentValue}`)
    return acc+currentValue ;
},0)

//console.log(myTotal); 

const shoppingCart = [
    {
        itemName : 'java script',
        price : 399
    },
    {
        itemName : 'java backend',
        price : 1099
    },
    {
        itemName : 'data science course',
        price : 199
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(priceToPay);