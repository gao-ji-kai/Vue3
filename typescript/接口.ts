// 用来描述对象形状的  interface

interface ISchool {
  readonly name: string; //readonly 仅读  不能修改
  age: number;
  address?: string; // ? 可填可不填
}

let school: ISchool = {
  name: "gjk",
  age: 22,
  address: "天津",
};

// 接口可扩展 可以继承已有属性.
interface Igjk extends ISchool {
  hobby: string;
  [key: string]: any; //可写任意个数  任意类型的数据
}

let Igjk: Igjk = {
  ...school,
  hobby: "football",
  a: 1,
  b: 2,
};

//类型断言 as xxx  表示这个对象就是这个样子

let company: ISchool = {
  name: "gjk",
  age: 22,
  address: "天津",
  lesson: ["语文", "英语"],
} as ISchool;

