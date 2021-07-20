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

  // Object assign
  var data = [{ key1: "val1" }, { key2: "val2" }],
    obj = Object.assign({}, ...data);

  console.log(obj);

  // Omit
  interface User {
    firstName: string;
    lastName: string;
    uid: number;
  }

  type omitUser = Omit<User, "lastName" | "uid">;

  interface Users {
    [name: string]: number;
  }
  const usersBird: Users = {
    pakornpong: 25,
    pang: 24,
  };
  console.log("usersBird: ", usersBird.pakornpong);

  const functionTwoParams = (a: number, b?: number) => {
    if (b) {
      return console.log("have b", b);
    }
    console.log("do't have b", a);
  };
  functionTwoParams(5);
  functionTwoParams(7, 8);

  interface Todo {
    title: string;
    description: string;
  }
  // Partial<Todo> บางส่วนของ interface Todo
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
  const todo2 = updateTodo(todo1, { description: "bird edit" });
  console.log("todo2: ", todo2);

  // Record
  type CatName = "meow" | "accord" | "bull";
  interface CatInfo {
    age: number;
    breed: string;
  }

  const cats: Record<CatName, CatInfo> = {
    meow: { age: 35, breed: "persian" },
    accord: { age: 35, breed: "persian" },
    bull: { age: 35, breed: "persian" },
  };
  console.log("cat: ", cats);

  // Pick
  interface TodoPick {
    title: string;
    description: string;
    completed: boolean;
  }
  type TodoPickInfo = Pick<TodoPick, "title" | "description">;

  interface IData {
    val1: number;
    val2: string;
  }
  const objs = {} as IData;
  console.log("objs", objs);
  const obj2 = [] as Array<IData>;
  console.log("objs2", obj2);

  // QueryKey
  interface GraphQLResponse<QueryKey extends string, ResponseType> {
    data: {
      [key in QueryKey]: ResponseType;
    };
  }
  interface UserQuery {
    username: string;
    id: number;
  }
  type dataIdResponse = GraphQLResponse<"dataId", UserQuery>;
  const dataIdResponseResult: dataIdResponse = {
    data: {
      dataId: {
        //
        id: 123,
        username: "test",
      },
    },
  };
  type pangtestQuery = GraphQLResponse<"pangtest", UserQuery>;
  const pangQuery: pangtestQuery = {
    data: {
      pangtest: {
        id: 35,
        username: "dbbb",
      },
    },
  };
  return (
    <div>
      <h4>hn</h4>
    </div>
  );
}
