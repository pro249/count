let number = document.querySelector('#number');
let plus = document.querySelector('#plus');
let min = document.querySelector('#min');
let answer = number.innerText;
let num = Number(answer);

plus.addEventListener('click', () =>{
    num++;
    number.innerText = num;
})
min.addEventListener('click', () => {
    num--;
    number.innerText = num;
})