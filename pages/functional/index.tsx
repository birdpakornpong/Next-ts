import React, { ReactElement } from "react";
import users from "./data";

interface Props {}

// แก้ คำเดียวกันทั้งหน้า  คำนั้น command + f แล้ว Alt + enter
export default function index({}: Props): ReactElement {
  let not = (func: any) => (arg: any) => !func(arg);
  let isMale = (user: any) => {
    return user.gender === "Male";
  };
  let isFemale = not(isMale);
  let result = isFemale(users[1]);
  console.log("result: ", result);
  const isOlder = (user: any) => {
    return user.age > 18;
  };
  const isYounger = not(isOlder);
  console.log("isOlder: ", isOlder(users[0]));
  console.log("isYounger: ", isYounger(users[0]));

  // Reduce
  const sum = users.reduce((sum, user) => {
    return (sum += user.age);
  }, 0);
  console.log("ผลรวมอายุ = ", sum);

  // นับจำนวนเพศ ชาย 2 หญิง 3
  const countSex = users.reduce(
    (stat, user) => {
      if (isMale(user)) {
        stat.male += 1;
      } else {
        stat.famale += 1;
      }
      return stat;
    },
    { male: 0, famale: 0 }
  );
  console.log("countSex: ", countSex);

  const countSex2 = users.reduce(
    (stat, user) => {
      isMale(user) ? (stat.male += 1) : (stat.famale += 1);
      return stat;
    },
    { male: 0, famale: 0 }
  );
  console.log("countSex2: ", countSex2);

  // แยกเพศ
  const grouping = users.reduce((stat, user) => {
    if (!stat[user.gender]) {
      stat[user.gender] = [user];
    } else {
      stat[user.gender].push(user);
    }
    return stat;
  }, {});
  console.log("grouping: ", grouping);

  // รวมอายุแยกเพศ
  const sumAgeGrouping = users.reduce((stat, user) => {
    if (!stat[user.gender]) {
      stat[user.gender] = user.age;
    } else {
      stat[user.gender] += user.age;
    }
    return stat;
  }, {});
  console.log("sumAgeGrouping: ", sumAgeGrouping);

  // รวมอายุเฉลี่ย
  const sumAvgAgeGrouping = users.reduce((stat, user) => {
    if (!stat[user.gender]) {
      stat[user.gender] = { sumAge: user.age, count: 1, avgAge: user.age };
    } else {
      stat[user.gender].sumAge += user.age;
      stat[user.gender].count += 1;
      stat[user.gender].avgAge =
        stat[user.gender].sumAge / stat[user.gender].count;
    }
    return stat;
  }, {});
  console.log("sumAvgAgeGrouping: ", sumAvgAgeGrouping);

  return (
    <div>
      <h3>
        higher order function มีคุณสมบัติ 2 ข้อ 1 รับ function เป็น parameter 2
        return function
      </h3>
    </div>
  );
}
