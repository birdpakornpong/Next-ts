import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  // Return function
  function say() {
    console.log("say");
    function sayHi() {
      console.log("sayHi");
    }
    return sayHi;
  }
  const returnFunctionSayHi = say(); // console show "say"
  returnFunctionSayHi(); // console show "sayHi"

  // Return function no name
  function talk() {
    console.log("talk about");
    return function () {
      console.log("talk with you");
    };
  }
  const returnFunctionNameless = talk(); // console show "talk about";
  returnFunctionNameless(); // console show "talk with you"

  // object argument in function
  function paramsTwo(one: number, two: number) {
    console.log(arguments); // การใช้ arguments ใน function ใช้ได้กัีบ function แบบนี้ arrow ใช้ไม่ได้
  }
  paramsTwo(1, 2, 3, 4, 5);

  // callback function
  function callback(func: any) {
    func(1, 2);
  }
  callback(paramsTwo); // paramTwo คือ Callback function

  // closure
  function outerFunc() {
    let value = 0;
    console.log("set Value = 0");
    function innerFunc() {
      // function ที่อยู่ใต้ function หลักนอกสุดคือ closure
      console.log("value + 1 = ", ++value);
    }
    return innerFunc;
  }
  const func1 = outerFunc();
  func1(); // 1 innerFunc เข้าถึงตัวแปรของ outerFunc ได้
  func1(); // 2
  // set value outerFunc = 0 ใหม่ เพราะ
  // การเปลี่ยนค่าตัวแปรอะไรก็ตามใน innerFunc ที่เป็น closure ไม่ส่งผลกับตัวแปรของ outerfunction
  const func2 = outerFunc();
  func2(); // 1
  func2();

  return (
    <div>
      <h3>Hello bird this page about javascript in a book where you buy</h3>
    </div>
  );
}
