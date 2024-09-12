const h1_1 = document.createElement('h6');

function fibonnacci(n) {
    const fbcc = [0, 1]

    for(let i = 2; i < n; i++){
        fbcc[i] = fbcc[i - 1] + fbcc[i-2]
    }
    return fbcc;
}

let lim = 10
let fibnc = fibonnacci(lim)

h1_1.innerHTML = `The first ${lim} numbers in fibonacci are ${fibnc}`

document.body.appendChild(h1_1);