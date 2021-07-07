import React, { ReactElement } from "react";

interface Props {}

const teamAvengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
];

// slice
// array.slice(begin, end)
const sliceWithNoEnd = teamAvengers.slice(2);
console.log("sliceWithNoEnd = ", sliceWithNoEnd); // เริ่มที่ Thor เลยเป็น [ "Thor" , "Hulk" , "Doctor Strange" ]

const sliceWithEnd = teamAvengers.slice(1, 4); // [ "Iron Man" , "Thor" , "Hulk" ]
console.log("sliceWithEnd = ", sliceWithEnd);

const [sliceText] = teamAvengers.slice();
console.log("slice = ", sliceText); // "Captain America" เพราะ ใส่ [] ครอบ sliceText

const teamSimpleArray = [
  { name: "Captain America" },
  { name: "Iron Man" },
  { name: "Thor" },
  { name: "Hulk" },
];

const [slice] = teamSimpleArray.slice();
console.log("slice = ", slice); //  { name: "Captain America" },

const str = "Team Avengers";
const sliceString = str.slice(2, 9);
console.log("sliceString = ", sliceString);

// splice
// array.splice(start, deleteCount, item1, item2, ...)

const teamAvengersOne = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
];

// ตัวอย่าง Add
teamAvengersOne.splice(2, 0, "Spider-Man");
console.log("spliceAdd = ", teamAvengersOne); // 2 คือจุดเริ่ม 0 ไม่ลบ "Spider-Man" เพิ่มเข้าไป
// [ "Captain America", "Iron Man", "Spider-Man" , "Thor", "Hulk", "Doctor Strange" ]

const teamAvengersTwo = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
];

// ตัวอย่าง Dalete
teamAvengersTwo.splice(1, 3);
console.log("spliceCut = ", teamAvengersTwo); // 1 คือจุดเริ่มต้น 3 จำนวนที่ลบถัดที่เริ่ม
// [ "Captain America", "Doctor Strange" ]

const teamAvengersThree = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
];

// ตัวอย่าง Replace
teamAvengersThree.splice(3, 1, "Ant-Man");
console.log("spliceReplace = ", teamAvengersThree);
// [ "Captain America", "Iron Man", "Thor", "Ant-Man", "Doctor Strange" ]

export default function index({}: Props): ReactElement {
  return (
    <div>
      <h1>Javascript</h1>
    </div>
  );
}
