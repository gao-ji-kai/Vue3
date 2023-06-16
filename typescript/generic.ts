//泛型   用来在代码执行时传入的类型，来确定结果
function createArray<T>(len: number, value: T): T[] {
  let result: any = [];
  for (let i = 0; i < len; i++) {
    result.push(value);
  }
  console.log(result);
  return result;
}
let arr = createArray(4, false);

// 多个泛型 元组交换 例如 [string,number] => [number,string]
// 不能写死，因为有可能传的是其他类型
const swap = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]];
};

swap<number,number>([1, 2]);

export{}
