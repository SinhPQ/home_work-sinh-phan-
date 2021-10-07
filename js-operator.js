//1.Khai bao 5 ten bien dung
let numberOne = 1
let number1 = 2 
let number = 3
let $Number = 4
let _text = 5

// Khai bao 5 ten bien sai
// let NumberVar = 6
// let 5count = 7
// let 5Count = 8
// let #count = 9
// let /count = 10

// -----------------------------------------------------------------------------------------

//2.Làm 5 bài toán tử: + - * / %
let u = 1 
let i = 2
let z = u + i
console.log(z) //3

console.log(i - u) //1

console.log(u * i) //2

console.log(i / u) //2

console.log(i % u) //0

// -----------------------------------------------------------------------------------------

//3.Tính kết quả các bài tập sau đây, in ra màn hình và giải thích tại sao lại ra được kết quả như vậy:
let x = 5
console.log(++x + x++ - --x - x--)  //0 

let e = 6
let k = 10
console.log(++k - k++ + e++ + e-- - --e - --k) //-3

let n = 10
let m = 12
let j = 16
console.log(n++ + j-- - --n + --m - m-- + ++m + ++j + --j + n--) //68
console.log(++n - n++ + j++ + ++m - m--) //15 

// -----------------------------------------------------------------------------------------

// 4.Khai báo 5 biến với 5 kiểu dữ liệu
let p = 1 //Number
console.log(x)

let string = "haha javascript" // String
console.log(string)

let object = {firstname: 'Sinh', lastname: 'Phan'} //Oject
console.log(object)

let array = [1,2,3,4,5,6] //Array 
console.log(array)
// Cách để console.log để biết thuộc dạng data type nào thì gõ:
console.log(array, typeof array) //array là dạng đặc biệt của object

// -----------------------------------------------------------------------------------------

// 5. Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]
// 5.1 Tính tổng (+) phần tử đầu tiên (0) và phần từ thứ 2 (1)
// 5.2 Tính tích (*) phần tử đầu tiên (0) và phần từ cuối cùng (9)

// -----------------------------------------------------------------------------------------

// 6. Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite
let object1 = {firstName: 'Sinh', lastName:'Phan' , age:'23', favorite:'football'}
console.log(object1)
//    6.1 Thay đổi firstName, lastName với text bất kỳ
object1.firstName = 'Bich'
object1['lastName'] = 'Ngoc'
console.log(object1)
//    6.2 In ra màn hình firstName + lastName mới
