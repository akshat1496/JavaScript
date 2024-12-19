// For each do not return the values But Filter returns the values.

const myNums = [1,2,3,,4,44,5]

// const nums  = myNums.filter( (num) => num>3)
// console.log(nums);
// console.log(myNums);
// const nums2 = myNums.filter((num)=>{
//     return num>4
// })
// console.log(nums2);
// console.log(myNums);

const books =[
    {title : 'One' , genre : 'Fiction' , publish:1981,edition:2000},
    {title : 'two' , genre : 'Non-Fiction' , publish:1971,edition:2002},
    {title : 'three' , genre : 'Science' , publish:1980,edition:2003},
    {title : 'four' , genre : 'History' , publish:1981,edition:2005},
    {title : 'five' , genre : 'Non-Fiction' , publish:1975,edition:2005},
    {title : 'six' , genre : 'Fiction' , publish:1981,edition:2030},
    {title : 'seven' , genre : 'Science' , publish:1981,edition:2020},
]

// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'Fiction' 
// })
const userBooks = books.filter( (bk) => {
    return bk.publish>= 1981 
})

// console.log(userBooks);

/*************** MAPS IN JAVASCRIPT ***************** */
 
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const newnum =  nums.map((num) => {return num +10})
// console.log(nums);
// console.log(newnum);

// WE CAN USE DIFFERENT MAPS AND FUNCTIONS TOGETHER BY USING DOT 
const newNum = nums
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>{return num>50})
console.log(nums);
console.log(newNum);



