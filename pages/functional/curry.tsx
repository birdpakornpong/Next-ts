import React, { ReactElement } from "react";

interface Props {}

export default function curry({}: Props): ReactElement {
  const curryAdd = (a: number) => (b: number) => a + b;
  const plus10 = curryAdd(10); // แทนค่า a เท่ากับ 10 แล้ว return b = a + b กลับมา
  const sum = plus10(20);
  console.log("sum: ", sum);

  const curryMap = (mapFn: any) => (items: number[]) => {
    let newLists: number[] = [];
    for (let i = 0; i < items.length; i++) {
      newLists.push(mapFn(items[i]));
    }
    return newLists;
  };

  const itemOne = [3, 5, 7, 0, 14, 92, 45, 8];
  const doubleItems = curryMap((item: number) => item * 2);
  const TrippleItems = curryMap((item: number) => {
    item * 3;
  });
  const sumCurry = doubleItems(itemOne);
  console.log("sumCurry: ", sumCurry);
  return (
    <div>
      <h3>
        Currying คือการที่เราแตก function ที่รับหลายๆ arguments ให้เป็นหลายๆ
        function ที่รับเพียง argument เดียว
      </h3>
    </div>
  );
}
