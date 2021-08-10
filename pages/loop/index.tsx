import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  const array = [1, 2, 3, 4, 5];
  // for loop
  let newArray: number[];
  for (let i = 0; i < array.length; i++) {
    console.log("i: ", i);
    //   array.reverse(); // เกิด side effect  variable array reverse every round
    let reverseArray = [...array];
    reverseArray.reverse();
    console.log("array for loop: ", reverseArray);
  }
  console.log("array :", array);

  // while
  let index = 0;
  while (index < array.length) {
    index++;
    let reverseArray = [...array];
    let whileLoop = { ...reverseArray.reverse() };
    console.log(` while loop: ${index}`, whileLoop[index - 1]); // ต้อง -1 เพราะ index++ บรรทัด 21
  }
  console.log("array2 :", array);

  function test(item: number, index: number, array: number[]) {
    console.log(`item = ${item} index = ${index} array = ${array}`);
    // ต้องการเปลี่ยนตัวเลขที่ index นั้นๆด้วย number บวก ตำแหน่ง
    array.splice(index, 1, item + index);
    console.log(`Array ${index} : `, array);
    // return array.slice();
  }
  array.forEach(test);
  return (
    <div>
      <h1>Loop</h1>
    </div>
  );
}
