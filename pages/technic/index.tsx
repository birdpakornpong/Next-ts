import React, { ReactElement } from "react";

interface Props {}

interface Interface {
  val1: string;
  val2: number;
}
type InterfaceOmitVal1 = Omit<Interface, "val1">;

export default function index({}: Props): ReactElement {
  // ประกาศ type array
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const numbers2: Array<number> = [1, 2, 3, 4, 5]; // Array<number> เหมือน number[]

  // Tuple ช่วยให้เราสามารถระบุ type ใน array
  let tup: [number, string];
  tup = [1, "bird"];

  // Enum
  enum Car {
    Toyota,
    Mazda,
    Honda,
  }
  let c: Car = Car.Toyota;
  console.log("c: ", c); // 0
  //ปกติค่าเริ่มต้นที่ 0
  enum Ability {
    Magic = 1,
    Battle = 3,
    Duo = 7,
  }
  let d: Ability = Ability.Magic;
  console.log("d :", d); // 1
  let e: Ability = Ability.Duo;
  console.log("e :", e); // 7
  // เอาข้อความออกมา
  let f: string = Ability[1];
  console.log("f: ", f); // Magic

  // Any
  let an: any = [1, "any", true];
  an[1] = 20;
  console.log("an: ", an); //[1, 20, true] Tuple เอ่อเร่อ => :16

  // Void เพื่อบอกว่า function นี้จะไม่มีการ return ค่าออกมา
  function thisIsVoid(): void {
    console.log("void");
  }
  thisIsVoid();
  console.log("thisIsVoid() ", thisIsVoid()); // undifine

  // Object เป็น type ที่เป็นตัวแทนของค่าแบบ key และ value ค่าที่เก็บสามารถเป็นค่าอะไรก็ได้
  let bird = {
    firstName: "Pakornpong",
    lastName: "Hiranjsraspiwat",
    age: function (): void {
      console.log(this.firstName + " " + this.lastName + " อายุ 25 ปี");
    },
  };
  bird.age();
  let pang = {
    firstName: "Nantawan",
    lastName: "Eangchuan",
    age: function (): void {
      console.log(this.firstName + " " + this.lastName + " อายุ 25 ปี");
    },
  };
  pang.age();
  let member = {
    name: "Hmoe",
    users: [bird, pang],
  };
  console.log("company", member);
  member.users[0].age();
  member.users[1].age();

  // Type assertions คำสัญญา
  let someValue: any = "some value";
  let someValueLength: number = (someValue as string).length;
  console.log("someValueLength :", someValueLength);

  var data = [{ key1: "val1" }, { key2: "val2" }],
    obj = Object.assign({}, ...data);

  console.log(obj);
  return (
    <div>
      <h4>hn</h4>
    </div>
  );
}
