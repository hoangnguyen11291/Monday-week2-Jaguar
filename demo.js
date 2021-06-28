// // Area of Cirle
// console.log("Area of a circle:");
// let pi = 3.14;
// console.log("Type of pi is", typeof pi);
// let radius = 5;
// console.log("Type of radius is", typeof radius);
// let area = (pi * radius) ** 2;
// console.log("The area of a circle given the radius", radius, "is", area);

// // Operators & Comparison
// // 1.1 Operators
// console.log("1", 10 + 24);
// console.log("2", "10" + "24");
// console.log("3", "Hello" + " " + 2021);
// console.log("4", 1 + 2 * 3);
// console.log("5", (1 + 3) ** 2);
// console.log("6", 1 / 0);
// console.log("7", 6 % 2);
// console.log("8", 5.5 % 2);
// console.log("9", Number("123"));
// console.log("10", typeof (1 + ""));

// // 1.2 Logical & Comparison
// console.log("1", 5 == "5");
// console.log("2", 5 === "5");
// console.log("3", 8 != 8.0);
// console.log("4", 8 !== 8.0);
// console.log("5", "true" === true);
// console.log("6", 4 <= 4.0);
// console.log("7", 7 >= 7);
// console.log("8", true && true);
// console.log("9", true && false);
// console.log("10", true || true);
// console.log("11", false || true);
// console.log("12", !true);
// console.log("13", !false);
// console.log("14", false && (true || true));
// console.log("15", (false && true) || true);

// // Conditionals\
// // 1.1
// let x = 5;
// if (x > 0) {
//   console.log(x, "is a possitive number");
// } else if (x < 0) {
//   console.log(x, "is a negative number");
// } else {
//   console.log(x, "is zero");
// }

// // 1.2
// let a = 4;
// let b = 10;
// let c = 44;

// if ((a > b, b > c)) {
//   console.log(
//     c,
//     "is the smallest number, ",
//     a,
//     "is the biggest number between ",
//     a,
//     b,
//     c
//   );
// } else if ((c > b, b > a)) {
//   console.log(
//     a,
//     "is the smallest number, ",
//     c,
//     "is the biggest number between ",
//     a,
//     b,
//     c
//   );
// }

// // Loops
// // 1.1
// function firstLoop(a, b) {
//   let s = "";
//   if (a > b) {
//     for (let i = a; i >= b; i--) {
//       s = s + i;
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       s = s + i;
//     }
//   }
//   console.log(s);
// }

// firstLoop(1, 5);

// 1.2
// function secondLoop(a, b) {
//   let s = 0;
//   for (let index = a; index <= b; index++) {
//     s += index;
//   }
//   console.log("Sum of numbers from", a, "to", b, "is:", s);
// }
// secondLoop(4, 5);

// // 1.3
// function thirdLoop(a) {
//   let s = 0;
//   let d = 0;
//   let original = a;
//   for (let index = 0; index < 4; index++) {
//     d = a % 10;
//     s += d;
//     a = (a - d) / 10;
//   }
//   console.log("Sum of digits of", original, "is", s);
// }
// thirdLoop(1024);

// // Swapping values of two variables
// function swapVariable(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   console.log(a, b);
// }

// swapVariable(3, 6);

// // Random Number
// console.log(Math.floor(Math.random() * 2));
// console.log(Math.floor(Math.random() * 11));
