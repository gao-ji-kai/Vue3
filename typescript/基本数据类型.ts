// npm install typescript  ts-node -g
// code runner

// 类型  ts中冒号后面的都是类型

// 基本数据类型
const str: string = "gjk";
const num: number = 123;
const boolean: boolean = false;

// 联合类型
let age: string | number = 1;
// age = 'hahah'

// 数组 对象 函数
const arr: number[] = [1, 2, 3, 4];

// 元组(用来标识数组里面都有哪些类型的数据且位置会一一对应)
const tuple: [string, number] = ["hhah", 1];
console.log(tuple);

let n: null = null;
let u: undefined = undefined;

//枚举
enum USER_ROLE {
  USER,
  MANAGE,
  ADMIN,
}
console.log(USER_ROLE.ADMIN);


// any 类型 用于类型不明确的情况
const array:any=[]


// object类型 非原始数据类型 
const create = (obj: object) => {
    
}
create({})
create([])
create(function () { })

// 对象类型{}



export{}