// 主要关心 返回值和参数

function sum(a: string, b: string): string {
  return a + b;
}
sum("a", "b");

//可以通过表达式来定义

//声明一个类型 类型别名
type Sum = ((aa: number, bb: number) => number) | string;

// interface Sum {
//   (a: number, b: number): number; //接口里的类型 只能写:
// }

/*
        type 和 interface 的区别  
         interface 可以继承 可以被类来实现
         type仅仅是个别名  一般在定义联合类型、定义临时变量时可以使用。
*/

let sum2: Sum = (a: number, b: number): number => a + b; //函数表达式的写法

sum2(1, 1);

