let name = "Thanhthanh Vo Nguyen";

// substring takes the first element and collects up to the next element entered but not including it)
console.log(name.substring(0, 3));


// let jordans = ['Jordan 13s', 'Jordans 5s', 'Jordan 10s', 'Jordan 7s'];
//
// // print out first pair of Jordans I found
//
// // console.log(jordans[0]);
// //
// // console.log(jordans.length);
//
// console.log(jordans.toString());
//
// // adds an element to the end
// jordans.push('Jordan 1s');
//
// console.log(jordans);
//
// // removes last element
// console.log(jordans.pop());
//
// console.log(jordans);
//
// // removes first element
// jordans.shift();
//
// console.log(jordans);
//
// // adds element to the beginning
// jordans.unshift('Jordan 13s');



// let familyMembers = ["Ba", "Me", "Thanh Binh", "Thanh An", "Ong Noi", "Ba Noi", "Ong Ngoai", "Ba Ngoai", "Co Ba",
//   "Chu Tu",
//   "Chu Nam",
//   "Chu Sau",
//   "Chu Bay",
//   "Cau Hai",
//   "Di Ba",
//   "Cau Nam",
//   "Tony",
//   "Emily",
//   "Trang",
//   "Di Ti Ti",
//   "Di Mi Mi",
//   "Jessica",
//   "Chi Quynh",
//   "Mai Phi",
//   "Duong Ba",
//   "Mo Hai",
//   "Thim Tu",
//   "Thim Nam",
//   "Thim Sau",
//   "Thim Bay"];
//
// console.log(`${familyMembers[0]}
// ${familyMembers[3]}
// ${familyMembers[7]}
// ${familyMembers[5]}
// ${familyMembers[9]}`);
//
// familyMembers.push("Ba Co", "Ba Co Tu", "Ba Co Sau", "Ong Co Sau",
// "Ong Co Tu", "Ba Co Ut", "Ba Co Nam");
//
// console.log(familyMembers);

let myName = "ThanhthanhVoNguyen";

console.log(myName.length);

let nameLength = myName.length;

// for (let i = 0; i < nameLength; i += 2) {
//   console.log(myName[i]);
// }

function reverseNameString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  var newName = joinArray[0].toUpperCase() + joinArray.slice(1);
  return newName;
}

myName = reverseNameString(myName);

console.log(myName);

let i;

for (i = 0; i < nameLength; i += 2) {
  console.log(myName[i]);
}

i = 0;

while (myName.length > i) {
  console.log(myName[i]);
  i += 2;
}



// strings

// let name = 'Donavan';
//
// console.log(name[0]);
//
// console.log(name.charAt(6));
//
// console.log(name.length);
//
// console.log(name.toUpperCase());
//
// console.log(name.toLowerCase());
//
// console.log(name.startsWith('D'));
