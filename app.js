function outer(){
    let count=3;
    return function inner(){
        count++;
        console.log(count);
    }
}

const fn=outer();
fn();
fn();

// console.log(x)
// var x=1;
// console.log("start");
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// console.log("end")

// function greet(name,callback){
//     callback("hello",name)
// }
// function callme(greeting,user){
//     console.log(greeting+" "+user+" "+"the callback was executed")
// }
// greet("haris",callme);

// const p=new Promise((resolve,reject)=>{
//         resolve("Done!")
// });
// p.then(result=>console.log(result))

// async function fetchData() {
//   let data = await fetch("https://api.example.com");
//   console.log(data);
// }
// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach((fruit) => {
//     console.log("I am eating a " + fruit);
// });

// // If you try to save it to a variable, it's empty:
// const result = fruits.forEach(f => f); 
// console.log(result); // undefined

const object1= {name:"haris",email:"aharis@gmail.com"}
console.log( object1.name);
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr)

function sumall(...number){
    return number.reduce((acc,curr)=>acc+curr,0)
}
console.log(sumall(1,2));

console.log("hello" * 5)// NaN

const cache = {};

function square(n) {
    // 1. Check if the result is already in our "backpack" (cache)
    if (cache[n]) {
        console.log("Fetching from cache...");
        return cache[n];
    }

    // 2. If not, do the hard work (math)
    console.log("Calculating result...");
    cache[n] = n * n;

    // 3. Return the result
    return cache[n];
}

console.log(square(5)); // Calculating result... 25
console.log(square(5)); // Fetching from cache... 25
console.log(cache);     // { "5": 25 }

// let a =0;
// let b =1;
// let n =5;
// for(let i=1;i<=n;i++){
//     let c=a+b;
//     a=b;
//     b=c
//     console.log(c)
// }

// let n=20;
// for(let i=2;i<n;i++){
//     if(n%i ===0){
//         let c=n;
//         console.log(c)
//     }
// }

// const array=[ 7,12,9,11,3 ]
// function bubble(array){
//     for(let i=0;i<array.length;i++){
//       for(let j =0;j<array.length-1-i;j++){
//     if(array[j]>array[j+1]){
//         let temp=array[j];
//         array[j]=array[j+1];
//         array[j+1]=temp;
//     }
// }
//     }
//     return array
// }
// console.log( bubble(array));

// const array=[1, 3, 5, 7, 9, 11];
// let target=6;
// function elementnotpresent(array,target){
//     let start =0;
// let end =array.length-1;
// while(start<=end){
// let mid = Math.floor((start + end) / 2);

//     if(array[mid]===target){

//      if(array[mid]<target){
//         start=mid+1
//     }else{
//         end=mid-1;
//     }  
//     }
// }
//     return -1;

// }
// console.log(elementnotpresent(array, target));
    

// let end=array.length;
// let target=6;
// function sumpair(array,target){
//     for(let i=0;i<end;i++){
//         for(let j=i+1;j<end;j++){
// if(array[i]+ array[j]===target){
//     console.log(`Pair of sum: (${array[i]}, ${array[j]})`);
// }
//     }
// }
// }
// sumpair(array,target)
// let end =array.length-1;

// function unique(array){
// for(let i=0;i<end;i++){
//     for(let j=i+1;j<end;j++){
//         if(array[i]==array[j]){
//          return false
            
//         }
//     }
// }
//     return true;
// }
// console.log(unique([1,2,3,4,5,6])); // true
// console.log(unique([1,2,3,2,5]))
// for(let i =0;i<array.length;i=i+2){
//     let temp=array[i];
//     array[i]=array[i+1];
//     array[i+1]=temp;
// }
// console.log(array);


// let start=0;
// let end=array.length-1;
// while(start<end){
//     let temp=array[start];
//     array[start]=array[end];
//     array[end]=temp

//     start++;
//     end--;
// }
// console.log(array)

// const array=[1,2,3,4,4];
// for(let i =array.length-1;i>0;i--){
//     if(array.includes(i)!=array){
//         array.push[i]
//     }
// }
// console.log(array);

// const array=[1,2,3,4,3];
// const array1=[10,8,30,4,5];
// const array2=[10,8,30];
// function searchelement(array,x){
// let storeindex=-1;
// for(let i=0;i<array.length;i++){
// if(array[i]==x){
//     storeindex=i
// }
// }
// return storeindex;
// }
// console.log(searchelement(array,3))
// console.log(searchelement(array1,5))
// console.log(searchelement(array2,6))
// // console.log(array.find())
// // -----------------
// function countelement(array,x){
// let storeindex=0;
// for(let i=0;i<array.length;i++){
// if(array[i]==x){
//     storeindex++;
// }
// }
// return storeindex;
// }
// console.log(countelement(array,3))

// const array=[1,2,3,4,5];
// const array1=[10,20,20,30];
// const array2=[2,2,2,2];
// const array3=[5,4,3];
// const array4=[2,2,1];
// function sortarray(array){
//     for(let i=0;i<array.length;i++){
// if(array[i]>array[i+1]){
//    return false;
// }
// }
// return true;
// }

// console.log(sortarray(array))
// console.log(sortarray(array1))
// console.log(sortarray(array2))
// console.log(sortarray(array3))
// console.log(sortarray(array4))
const array=[1,2,3,4,5];
const array1=[1,2,3,4,1];
// function duplicatecheck(array){
//     for(let i=0;i<array.length;i++){
//         for(let j =i+1;j<array.length;j++){
// if(array[i]==array[j]){
//    return true;
// }
// }
//     }
// return false;
// }
// console.log(duplicatecheck(array))

// function duplicatecheck(array){
//     for(let i=0;i<array.length;i++){
//       let curr=array[i];
// if(curr==array[i+1]){
//    return true;
// }
// }
// return false
// }
// console.log(duplicatecheck(array))
// console.log(duplicatecheck(array1))

const max=[3,7,10,2,14];
function maxelement(){
let curr=0;
for(let i=0;i<max.length;i++){
    
    if(max[curr]<max[i]){
        curr=i
    }

}
return max[curr];
}
console.log(maxelement(max))

function sortarray(max){
let curr=0;
let result=true;
if(max.length==1){
    return result;
}
for(let i=1;i<max.length;i++){
    if(max[curr]>max[i]){
        result =false;
        return result;
    }

}
return result;
}
console.log(sortarray(max))

const array5=[3,7,10,2,14]
function linearsearh(array,target){
for(let i=0;i<array.length;i++){
    if(array[i]==target){
return true;
    }

}
return false;
}
console.log(linearsearh(array5,10))

function secondhighest(array){
    let first=0;
    let second=-1;
    for(let i=0;i<array.length;i++){
       
        if(array[i]>array[first]){
            first=curr;
}
else if(array[second]<array[first]&&array[i]>array[second]){
second=first
}
        }
        return array[second]
    }
console.log(secondhighest(array))