import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  let iAmString: any = "Hello ชาวโลก";
  // เพื่อให้สามารถเรียก length ของ string ได้
  // จึงต้องบอก TypeScript ว่าตัวแปรของเราเป็น string นะก่อน
  // let strLen: number = (<string>iAmString).length
  let strLen: number = (iAmString as string).length;
  let stk: number = iAmString.length;
  console.log("iAmString", stk);

  // ใส่ตัวเลข 4 ตัว ผลลัพธ์เรียงลำดับ first time
  const numberInput = (a: number, b: number, c: number, d: number) => {
    let comparisonFirst: number[];
    if (a > b) {
      comparisonFirst = [b, a];
    } else {
      comparisonFirst = [a, b];
    }
    let comparisonSecond: number[];
    if (c > d) {
      comparisonSecond = [d, c];
    } else {
      comparisonSecond = [c, d];
    }
    let result: number[];
    if (comparisonFirst[0] > comparisonSecond[0]) {
      result = [comparisonSecond[0], comparisonFirst[0]];
    } else {
      result = [comparisonFirst[0], comparisonSecond[0]];
    }
    if (comparisonFirst[1] > comparisonSecond[1]) {
      result.push(comparisonSecond[1], comparisonFirst[1]);
    }
    result.push(comparisonFirst[1], comparisonSecond[1]);
    console.log(result);
  };
  numberInput(5, 8, 9, 3);

  // type Assertions
  const trustMeThisIsNumber: number = "11" as unknown as number;
  console.log("trustMeThisIsNumber: ", trustMeThisIsNumber);
  const trustMeThisBoolean: boolean = "11" as unknown as boolean;
  console.log("trustMeThisString", trustMeThisBoolean);
  return (
    <div>
      <h1>
        TypeScript นั้นเป็น transpiler เหมือน Babel นั่นหมายความว่าตัวแปลภาษาของ
        TypeScript จะแปลโค๊ดที่เราเขียนให้เป็น JavaScript อีกทีนึง
        จึงมั่นใจได้ว่าผลลัพธ์สุดท้ายจะสามารถใช้งานได้บนเว็บเบราเซอร์ทั่วไป
      </h1>
      <h3>
        อีType Assertions เมื่อเรามีตัวแปรประเภท Any แต่ต้องการบอก compiler ของ
        TypeScript ว่า เห้ยๆ เชื่อฉันนะ ไอ้เนี่ยมันเป็นข้อมูลชนิด xXx หละ
        นี่หละครับที่เรียกว่า type assertion
      </h3>
    </div>
  );
}
