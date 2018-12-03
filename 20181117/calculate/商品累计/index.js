let liBox = [...document.getElementsByTagName('li')];
let divBox = document.getElementById('info');

let sum = 0;
let amount = 0;
let arr = [];

function goods(liBox) {
    let addBox = liBox.getElementsByTagName('i')[1];
    let reduceBox = liBox.getElementsByTagName('i')[0];
    let span = liBox.querySelector('span');
    let em = liBox.querySelector('em');
    let perPrice = span.getElementsByTagName('strong')[0];
    let totalPrice = span.getElementsByTagName('strong')[1];
    let quantityOG = divBox.querySelectorAll('em')[0];
    let totalS = divBox.querySelectorAll('em')[1];
    let mExpensive = divBox.querySelectorAll('em')[2];
    console.log(mExpensive);
    let unitP = parseFloat(perPrice.innerHTML);
    let num = 0;
    let price = 0;
    // console.log(totalS);
    addBox.onclick = function () {
        num += 1;
        em.innerHTML = num;
        price += parseFloat(perPrice.innerHTML);
        totalPrice.innerHTML = price + '元';
        sum += 1;
        quantityOG.innerHTML = sum;
        amount += parseFloat(perPrice.innerHTML);
        totalS.innerHTML = amount;
        // let obj={};
        // arr.includes(unitP) ? null : arr.push(unitP);
        arr.push(unitP);
        console.log(arr);
        mExpensive.innerHTML = Math.max(...arr);
    }
    reduceBox.onclick = function () {
        num -= 1;
        if (num < 0) {
            num = 0;
            return;
        }
        em.innerHTML = num;
        price -= parseFloat(perPrice.innerHTML);
        totalPrice.innerHTML = price + '元';
        sum -= 1;
        quantityOG.innerHTML = sum;
        amount -= parseFloat(perPrice.innerHTML);
        totalS.innerHTML = amount;
        if (arr.includes(unitP)) {
            let index = arr.indexOf(unitP);
            arr.splice(index, 1);
        }
        Number(arr) === 0 ? mExpensive.innerHTML = 0 : mExpensive.innerHTML = Math.max(...arr);
        console.log(arr);
    }
}

liBox.forEach(e => {
    goods(e);
});







