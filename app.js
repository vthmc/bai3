const ainput = document.querySelector("#aInput")
const binput = document.querySelector("#bInput")
const form = document.querySelectorAll(".number 1")
const out = document.querySelector("#result")

form.addEventListener("submit", (e) =>{
    const results = [];
    e.preventDefault();
    const a = number(aInput.value);
    const b = number(bInput.value);
    for (let i = a ; i <= b; i++) {
        const isPrime = isPrimeNumber(i);
        if (isPrime) {
            results.push(i);
        }
    }
    out.innerHTML = 
    "asdad " + JSON.stringify(results);
})

function isPrimeNumber(num) {
    if (num < 1) {
        return false;
    }
    let count = 0;
    for ( let i = 1 ; i<= Math.sqrt(num); i++) {
        if (num % i == 0) {
            count++ ;
        }
    }
    if (count === 0 ) return true;
    else return false;
}