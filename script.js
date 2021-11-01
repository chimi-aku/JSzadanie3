// 1
console.log('-----zadanie 1-----');
console.log('a)');

function sum(a, b) {
    return a + b;
}

function pointXY(x, y) {
    const point = {
        x: x,
        y: y,
    };

    return point;
}

function combainTwoArrays(fun, arr1, arr2) {
    const resArr = [];

    const l1 = arr1.length;
    const l2 = arr2.length;
    const l = Math.max(l1, l2);

    for (let i = 0; i < l; i++) {
        if (i >= l1) arr1.push(0);
        if (i >= l2) arr2.push(0);
        resArr.push(fun(arr1[i], arr2[i]));
    }

    return resArr;
}


const arr1 = [4, 5, 6];
const arr2 = [10, 20, 30, 2];
const sumArr = combainTwoArrays(sum, arr1, arr2);
console.log(sumArr);

console.log('b)');
const arr3 = [1, 2, 3];
const arr4 = [7, 8, 9];
const pointsArr = combainTwoArrays(pointXY, arr3, arr4);
console.log(pointsArr);

console.log('c)');
function combainArrays (fun, ...rest) {
    return rest[0].reduce((newRest, _, i) => newRest.concat([rest.map((row) => row[i])]), []).map((elem) => fun(...elem))
}

const multisumArr = combainArrays(sum, arr1, arr2, arr3);

console.log(multisumArr);

//2
console.log('-----zadanie 2-----');

function range(a, b) {
    if (a <= b) {
        var c = a - 1;
        return (function foo() {
            c == b ?  c = NaN : c += 1;
            return c;
        });
    } else if (a > b) {
        var c = a + 1;
        return (function foo() {
            c == b ? c = NaN : c -= 1;
            return c;
        });
    }
}

f = range(5, 1);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());


//3
console.log('-----zadanie 3-----');

const alpha = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97));
const str = 'abdudabi';

function charNum(str) {
    let obj = {};

    for (letter of str) {
        if (obj[letter] == undefined) obj[letter] = 0;
        obj[letter] = obj[letter] + 1;
    }

    return obj;
}

const obj = charNum(str);

console.log(obj);

//4
console.log('-----zadanie 4-----');

function scale0to1(arr) {
    let everyTwo = arr.filter((value, index) => index % 2 == 1);
    const max = Math.max(...everyTwo);
    const min = Math.min(...everyTwo);

    everyTwo.forEach(el => {
        if (el == max) el = 1;
        if (el == min) el = 0;
        return el;
    });

    const scaled = everyTwo.map((val) => (val /= max));

    return scaled;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
scaledArr = scale0to1(arr);
console.log(scaledArr);

//5
console.log('-----zadanie 5-----');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const N = 10;
let array = Array.from(Array(N));
array = array.map(() => getRandomIntInclusive(1, 10));

const product = array.reduce((acc, curr) => (acc *= curr));
const numOfEven = array.reduce((acc, curr) => 
    curr % 2 ? acc : acc + 1
, 0);

console.log(array);
console.log('product: ', product);
console.log('numOfEven: ', numOfEven);
