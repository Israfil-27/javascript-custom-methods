let numbers = [1, 2, 3,"cat","car","orange","Audi",6];



// Array.prototype.includesCustom=function (el) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i]===el) {
//             return true
//         }
//     }
//     return false
// }
// console.log(numbers.includesCustom("Audi"));




// Array.prototype.indexOfCustom=function (el) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i]===el) {
//             return i
//         }
        
//     }
//     return -1
// }
// console.log(numbers.indexOfCustom("Adi"));



// Array.prototype.reverseCustom = function() {
//     let newArr=[];
//     for (let i = this.length-1; i>=0; i--) {
//         newArr.push(this[i])
//     }
//     return newArr
//   };
//   console.log(numbers.reverseCustom());
  




let numbers1=[1,6,2,7,3,16,4,5]
// Array.prototype.findCustom=function(el) {
//     let newArr=[];
//     for (let i = 0; i < this.length; i++) {
//         if (this[i]>el) {
//         newArr.push(this[i])
//         return newArr
//         }
//     }
//     return undefined
// }
// console.log(numbers.findCustom(2));





// Array.prototype.findIndexCustom=function (el) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i]>el) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(numbers1.findIndexCustom(9999));


// Array.prototype.filterCustom=function (callback) {
//     let newArr=[]
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i],i,this)) {
//             newArr.push(this[i])
//         }a
//     }
//     return newArr
// }

// let a = numbers1.filterCustom((el)=>{return 10 > el})
// console.log(a);


// Array.prototype.everyCustom=function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (!callback(this[i],i,this)) {
//             return false
//         }
//     }
//     return true
// }
// console.log(numbers1.everyCustom(el=>{return el<1000}));


// Array.prototype.someCustom=function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i],i,this)) {
//             return true
//         }
//     }
//     return false
// }
// console.log(numbers1.someCustom(el=>{return el > 1000}));

// Array.prototype.joinCustom = function(res= ',') {
//     let result = '';
//     for (let i = 0; i < this.length; i++) {
//         result += this[i];
//         // console.log(this[i]);
//       if (i !== this.length) {
//         result += res;
//       }
//     }
//     return result;
//   };
// console.log(numbers1.joinCustom("-"));





// Array.prototype.reduceCustom=function (callback,res) {
//     for (let i = 0; i < this.length; i++) {
//         res=callback(res,this[i],i,this)

//     }
//     return res
// }
// let number6=[1,23,45,6].reduceCustom(
//     (res,item,i,arr)=>{
//     return res + item
//     },
//     0
// );
// console.log(number6);