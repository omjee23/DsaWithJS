let data1 = [1, 2, 3, 7, 8, 9, 4, 5, 11];
let data2 = [3, 4, 76, 89, 123, 45, 23];
let data3 = [];
for (let i = 0; i < data2.length; i++) {
  data1[data1.length] = data2[i];
}
for (let i = 0; i < data1.length; i++) {
  for (let j = i + 1; j < data1.length; j++) {
    if (data1[i] > data1[j]) {
      let temp = data1[i];
      data1[i] = data1[j];
      data1[j] = temp;
    }
  }
}
console.log(data1);
