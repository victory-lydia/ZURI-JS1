//06
let digit = "#76B"
digit = digit.split("").map((item) =>{
    if(item == "#") {return item};
       return item + item ;
}).join("")
if(digit[0] != "#") {
    digit = "#" + digit;
}
console.log(digit)


//07
function getEveryNth(arr, nth) {
    const result = [];
  
    for (let i = 0; i < arr.length; i += nth) {
      result.push(arr[i]);
    }
  
    return result;
  }
  
  console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));
  console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));


//08
const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Non_Unique([1, 2, 3, 4]));  


//09
function Uncapitalize(str1){
    return str1.charAt(0).toLowerCase() + str1.slice(1);
  }
   console.log(Uncapitalize('Js string exercises'));
 
   
//10
const filter_Non_UniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(filter_Non_UniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
)); 


//11
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));


//12
const yes_No = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(yes_No('Y')); 
console.log(yes_No('yes'));  
console.log(yes_No('No')); 
console.log(yes_No('Foo', true));  


//13
    const print = (arr1,arr2) => {
        const set = new Set(arr1)
        arr2.forEach(element => {
            set.add(element)
        });
        return set
    }
  
    const arr1 = [10, 20, 30, 40, 50]
    const arr2 = [10,20,34,32,11]
       
    console.log(print(arr1,arr2))


//14
const time_taken = callback => {
    const result = callback();
    return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(3, 12)) +" ms");
console.log("Time taken: " + time_taken(() => Math.sqrt(225)) +" ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((7 * 7) + (8 * 8)))+" ms");


//15
 function fun(){
            const input = prompt('Please enter unsafe integer:');
            var mini = Math.min(input,Number.MAX_SAFE_INTEGER);
            var maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
            const safeInt = Math.round(maxi);
            document.getElementById("int").innerHTML = input + " => " + safeInt;
        }


//16
const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));


//17
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
console.log(tail([1, 2, 3])); 
console.log(tail([1]));


//18
const sumBy = (arr, fn) =>
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);

console.log(sumBy([{ n: 6 }, { n: 4 }, { n: 10 }, { n: 8 }], o => o.n));
console.log(sumBy([{ n: -6 }, { n: -4 }, { n: 10 }, { n: 8 }], 'n'));


//19
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
console.log(randomIntegerInRange(5, -5));
console.log(randomIntegerInRange(-2, -7));


//20
const random_intArray_In_Range = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(random_intArray_In_Range(1, 20, 10));
console.log(random_intArray_In_Range(-10, 10, 5));


//21
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));


//22
