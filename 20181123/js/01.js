let arr = [1, 5, 6, [5, [6, 9], 8], 5, [95]];

let newA = [];
fn = function (arr) {
  
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (typeof item === 'object') {
            fn(item);
        } else {
            newA.push(item);
        }
    }
}

fn(arr);
console.log(newA);