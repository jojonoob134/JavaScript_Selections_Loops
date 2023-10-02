console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let countNum = 0; countNum <= 100; countNum++){
    if (countNum % 2 == 1){
        console.log(countNum);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let countNum = 0; countNum <= 100; countNum++){
    if (countNum % 3 == 0 && countNum % 5 == 0){
        console.log("FIZZBUZZ");
    }
    if (countNum % 3 == 0){
        console.log("FIZZ");
    }
    if (countNum % 5 == 0){
        console.log("BUZZ");
    }
}
console.log("EXERCISE 3:\n==========\n");
let isNum = 0;
while (isNum <= 100){
    if (isNum % 2 == 1){
        console.log(isNum);
    }
    isNum++;
}
isNum = 0;
do {
    if (isNum % 3 == 0 && isNum % 5 == 0){
        console.log("FIZZBUZZ");
    }
    if (isNum % 3 == 0){
        console.log("FIZZ");
    }
    if (isNum % 5 == 0){
        console.log("BUZZ");
    }
    isNum++;
} while(isNum <= 100);
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
for (let rano = 0; rano <= n; rano++){
    if (rano == value){
        console.log("Found value");
        break;
    }
    if (rano == n && !(rano == value)){
        console.log("Did not find value");
    }
}