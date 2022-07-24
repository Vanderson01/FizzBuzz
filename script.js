function fizzbuzz() {
    let i = 1;
    let temp = [];
    let fizz, buzz = "";
    let params = prompt("Digite um número para percorrer do 1 até ele:");
    while (i <= params) {
        if (i%3 === 0 && i%5 === 0) {
            temp[i-1] = "FizzBuzz";
        } else if (i%3 === 0) {
            temp[i-1] = "Fizz";
        } else if (i%5 === 0) {
            temp[i-1] = "Buzz";
        } else{
            temp[i-1] = i;
        }
        
        i++;
    }
    return document.getElementById("demo").innerHTML = temp;
}