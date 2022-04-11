/*
 * 数组声明
 */
const array = Array(5).fill("");

/*
 * 二维数组声明
 */

const erwei = Array(5)
  .fill(0)
  .map(() => Array(5).fill(""));
// console.log(erwei);

/*
 * 数组求和/取最大值
 */

const f = [1, 3, 4, 6, 7, 8, 9, 2];
const sum = f.reduce((x, y) => x + y);
const maxNumber1 = f.reduce((x, y) => {
  return x > y ? x : y;
});
const maxNumber2 = Math.max(...f);
// console.log(maxNumber, sum);
console.log(maxNumber2);

/*
 *数组排序
 */

const a = [5, 1, 3];
const rise = a.sort((x, y) => y - x);
// console.log(rise);
const b = [
  { x: 1, y: "刚刚", z: "谷歌" },
  { x: 5, y: "信息", z: "更改" },
  { x: 3, y: "解决", z: "零零" },
];
// const c = b.sort((i, j) => {
//   return i.x.localeCompare(j.x);
// });
// console.log(c);
