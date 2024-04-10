// Bài tập 1:
// Viết chương trình thực hiện các nhiệm vụ sau:
// 1. Viết hàm tạo ra mảng numbers có kích cỡ size, và các giá trị của mảng được sinh ra ngẫu nhiên trong [10, 60]
// 2. Viết hàm hiển thị mảng numbers ra màn hình
// 3. Viết hàm đếm xem mảng numbers có bao nhiêu số chẵn
// 4. Viết hàm đếm xem mảng numbers có bao nhiêu số nguyên tố
// 5. VIết hàm tính tổng các phần tử có trong mảng numbers

function generateArray(size) {
    let numbers = new Array(size)
    let min = 10;
    let max = 60;
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return numbers;
}

function printArray(array) {
    // for (let item of array) {  //for of: đi qua từng giá trị của phần tử trong mảng
    //     console.log(item);
    // }
    console.log(array)
}

function isEvenNumber(number) {
    return number % 2 == 0;
}

function isPrinmer(number) {  // hàm xét số nguyên tố theo thuyết phủ định 
    let number_is_primer = true
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            number_is_primer = false;
            break;
        }
    }
    return number_is_primer
}

function countEvenNumber(array) {
    let count = 0;
    let i = 0;
    while (i < array.length) {
        // if (array[i] % 2 == 0) {
        //     count++;
        // }
        // i++;
        if (isEvenNumber(array[i])) {
            count++;
        }
        i++;
    }
    console.log(`Count of even number in array is: ${count}`)
}

function countPrimerNumber(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrinmer(array[i])) {
            count++
        }
    }
    console.log(`Count of primer number in array is: ${count}`);

}

function sumArray(array) {
    let total = 0;
    for (number of array) {
        total += number;
    }
    console.log(`Total of value in array: ${total}`)
}

// console.log(Math.random()); ///(giá trị của hàm này là từ 0 -> 1);

let myArray = generateArray(15);
printArray(myArray);
countEvenNumber(myArray);
countPrimerNumber(myArray);
sumArray(myArray);