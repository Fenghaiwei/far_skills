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
// console.log(maxNumber2);

/*
 *数组排序
 */

const a = [5, 1, 3];
const rise = a.sort((x, y) => y - x);
// console.log(rise);
var list = [
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-10 00:00:00",
    price: 523,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 445,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 455,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 356,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 563,
  },
  {
    key: "粉煤&华运国际&含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-010 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 551,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 563,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 999,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&华运国际&不含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-10 00:00:00",
    price: 133,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 165,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 755,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 755,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 755,
  },
  {
    key: "粉煤&橘里橘气&含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-10 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 894,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 899,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 0,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 1234,
  },
  {
    key: "粉煤&橘里橘气&不含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-10 00:00:00",
    price: 654,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 761,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 654,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 0,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 452,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 755,
  },
  {
    key: "粉煤42118&测试-花菜&含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-10 00:00:00",
    price: 0,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-09 00:00:00",
    price: 0,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-08 00:00:00",
    price: 456,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-07 00:00:00",
    price: 1002,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-06 00:00:00",
    price: 521,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-05 00:00:00",
    price: 557,
  },
  {
    key: "粉煤42118&测试-花菜&不含税",
    statisticsDate: "2022-05-04 00:00:00",
    price: 0,
  },
];
var result = list.sort((x, y) => {
  return Date.parse(x.statisticsDate) - Date.parse(y.statisticsDate);
});

/*
 *打乱数组
 */
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list.sort(() => {
  return Math.random() - 0.5;
});
// console.log(list);

let arr = [
  { name: "jack", course: "语文", count: 100 },
  { name: "jack", course: "英语", count: 100 },
  { name: "jack", course: "数学", count: 100 },
  { name: "rose", course: "语文", count: 50 },
  { name: "rose", course: "英语", count: 50 },
  { name: "rose", course: "数学", count: 50 },
];
//reduce
let s2 = arr.reduce((obj, current, index) => {
  let name = current.name;
  let count = current.count;

  // 获得obj对应名称值  {'jack':100} --》 100
  let oldCount = obj[name];
  // oldCount 如果是 undefined，表示此名称第一次出现
  if (oldCount) {
    obj[name] = oldCount + count;
  } else {
    //第一次赋值
    obj[name] = count;
  }
  console.info(
    `之前累加值：${oldCount},当前值：${count}，最终结果：${JSON.stringify(obj)}`
  );

  return obj;
}, {});
