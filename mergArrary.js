let data1 = [33, 45, 78, 77, 90, 53, 43];
let data2 = [95, 57, 13, 23, 59, 70, 76];
let data3 = [];
for (let i = 0; i < data1.length; i++) {
  data3[i] = data1[i];
}
for (let i = 0; i < data2.length; i++) {
  data3[data1.length + i] = data2[i];
}
console.log(data3);

// default function to merge arrary
let data4 = [...data1, ...data2];
console.log(data4);
// default function to reverse array

data4.reverse();
console.log(data4);
