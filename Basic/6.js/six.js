const h1_1 = document.createElement('h4');

function vowelCount(str) {
    let vowelsInWord = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let stri = str.toLowerCase();
    for (let i = 0; i <= stri.length; i++) {
        if (vowels.includes(stri[i])) {
            vowelsInWord++
        }
    }
    return vowelsInWord;
}

let stringi = 'Hello World'
let vowels = vowelCount(stringi)

h1_1.innerHTML = `There are ${vowels} in the String ${stringi}`
document.body.appendChild(h1_1);