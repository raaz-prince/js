// const coding = ["js","java","cpp","c","rust"]


// //for each doesn't return anything
// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 );
// console.log(newNums)

// if we use scope inside callback function then we have to return the values explicitlly

const newNums = []

// myNums.forEach( (num) => {
//     if(num>4)
//     newNums.push(num)
// })

// console.log(newNums);

const books = [
    {title : 'Book 1' , genre : 'Fiction', published : 1995, edition : 2019},
    {title : 'Book 2' , genre : 'History', published : 2000, edition : 2016},
    {title : 'Book 3' , genre : 'Science', published : 1992, edition : 2010},
    {title : 'Book 4' , genre : 'Non - Fiction', published : 2005, edition : 2010},
    {title : 'Book 5' , genre : 'Science', published : 2010, edition : 2023},
    {title : 'Book 6' , genre : 'Science', published : 1960, edition : 2021},
    {title : 'Book 7' , genre : 'History', published : 2015, edition : 2022},
    {title : 'Book 8' , genre : 'Fiction', published : 2020, edition : 2023}
];

let userBooks = books.filter( (bk) => bk.genre==="Fiction")
 userBooks = books.filter( (bk) => bk.published >=2000 && bk.genre ==="History")

console.log(userBooks);

