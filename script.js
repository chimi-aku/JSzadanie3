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


function combainArrays(fun, ...arrays) {
    const resArr = [];

    for(let j = 0; j < arrays.length; j++) {
        for (let i = 0; i <  arrays[j].length; i++) {
            if (i >= arrays[j].length) arrays[j].push(0);
            resArr.push(fun(arrays[j][i], arrays[j][i + 1]));
        }
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
const multisumArr = combainArrays(sum, arr1, arr2, arr3);
console.log(multisumArr);


//2
console.log('-----zadanie 1-----');