import React, { ReactElement } from "react";
import { split, curry, compose, reverse, toUpper } from "ramda";

interface Props {}

export default function composition({}: Props): ReactElement {
  const textForTest = "BirdLovePang";
  const formatTextToArray = (name: string) => {
    const upperCase = name.toUpperCase();
    return upperCase.split("", 4).reverse();
  };
  console.log("formatTextToArray: ", formatTextToArray(textForTest));

  const testSplit = textForTest.split("Love").reverse();
  console.log("testSplit: ", testSplit);

  const toUpperCase = (text: string) => text.toUpperCase();
  const textToArray = (text: string) => text.split("");
  const reverseArray = (text: string[]) => text.reverse();
  const textToArrayReverse = reverseArray(
    textToArray(toUpperCase(textForTest))
  );
  console.log("textToArrayReverse: ", textToArrayReverse);

  // เราแค่ใช้ curry ของ Ramda มาครอบ function โดย curry จะแปลง function ของเราให้เป็น currying function ให้เอง
  const curryAdd = curry((a, b) => a + b);
  const plus10 = curryAdd(10);
  console.log("plus10: ", plus10(20));

  const funcComposition = compose(reverseArray, textToArray, toUpperCase);
  console.log("textCompose: ", funcComposition(textForTest));

  const textToRamda = split("");
  const func1 = compose(reverse, textToRamda, toUpper);
  console.log("ทดสอบ :", func1(textForTest));
  return (
    <div>
      <h3>
        Composition คือ การนำผลลัพธ์ของการเรียก function หนึ่งไปเป็น argument
        ของอีก function หนึ่ง
      </h3>
    </div>
  );
}
