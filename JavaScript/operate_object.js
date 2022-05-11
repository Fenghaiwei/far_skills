/**
 * Object.assign(target1, target2, ...targetn)
 * 后面的属性向前面的属性合并
 * 如果target1是空对象，可以创建一个全新对象，而不是对象引用
 */
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1,
  b: 2,
};

const obj3 = Object.assign({}, obj1);
obj3.a = 5;
console.log(obj3, obj2, obj1);
const obj4 = { ...obj3 };
obj3.a = 6;
console.log(obj4);
/**
 * Object.is(value1, value2)
 * 没有隐式转换
 * 可以比较+0,-0、NaN
 */
console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(0 === -0); // true
console.log(Object.is(0, -0)); //false
console.log(Object.is(1, 1)); //true
