let firstArray = [1, 7, 8, 4, 5, 2, 6, 3, 600, 15, 17, 22, 570, 25, 28, 55, 500];

function firstFunction(array){
    let secondArray = [];
    let num = 0;
    
    for(let i = 0; i < array.length; i++){
        let arrayNumber = array[i];
        if(arrayNumber > num){
            num = arrayNumber;
        }
    }
    for(let i = 0; i < array.length; i++){
        let arrayNumber = array[i];
        if(arrayNumber == num){
            continue;
        }
        else{
            secondArray.push(arrayNumber);
        }
    }
    let secondLarge = 0;
    for(let i = 0; i < secondArray.length; i++){
        let result = secondArray[i];
        if(result > secondLarge){
            secondLarge = result;
        }
    }
    return secondLarge;
}

const newArray = firstFunction(firstArray);
console.log("The Second Largest Number Is: ",newArray);