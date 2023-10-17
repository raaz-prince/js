const myNums = [1,2,3,4,5,6,7,8,9,10]

// It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element. Reduce can be used in place of the following code:
 /* 
 arr = new Array(1, 2, 3, 6, 5, 4); 
result = 1 
for(let i = 0; i < 6; i++) { 
    result = result * arr[i]; 
} 
 */ 
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