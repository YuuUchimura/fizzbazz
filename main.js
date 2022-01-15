// let i = 0;
// document.getElementById("rewriteNum")
// rewriteNum.innerHTML = i;
// const rewriteCntUp = () => {
//     i++;
//     if (i % 3 === 0 && i % 5 === 0) {
//         rewriteNum.innerHTML = "fizzBuzz"
//     } else if (i % 3 === 0) {
//         rewriteNum.innerHTML = "fizz"
//     } else if (i % 5 === 0) {
//         rewriteNum.innerHTML = "buzz"
//     } else {
//         rewriteNum.innerHTML = i;
//     }
// }

// 変数の定義
let i = 0;
// HTMLのid=numを取得し
document.getElementById("num")
// HTMLのid=numに０を代入
num.innerHTML = i;

// number関数
const number = () => {
    i++;
    if (i % 3 === 0 && i % 5 === 0) {
        alert("ぶっぶーですわ")
        location.reload();

    } else if (i % 3 === 0) {
        alert("ぶっぶーですわ")
        location.reload();

    } else if (i % 5 === 0) {
        alert("ぶっぶーですわ")
        location.reload();

    }
    num.innerHTML = i;
}


// fizz関数
const fizzBtn = () => {
    i++;
    if (!(i % 3 === 0)) {
        alert("ぶっぶーですわ")
        location.reload();
    } else {
        num.innerHTML = "fizz"
    }
}

// buzz関数
const buzzBtn = () => {
    i++;
    if (!(i % 5 === 0)) {
        alert("ぶっぶーですわ")
        location.reload();
    } else {
        num.innerHTML = "buzz";
    }
}

// fizzbuzz関数
const fizzbuzzBtn = () => {
    i++;
    if (!(i % 3 === 0 && i % 5 === 0)) {
        alert("ぶっぶーですわ")
        location.reload();
    } else {
        num.innerHTML = "fizzbuzz";
    }
}