import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  var person = {
    firstName: "Pakornpong",
    lastName: "Hirunpiwat",
    sayHi: function () {
      console.log(`Hello +` + this.firstName + " " + this.lastName);
    },
  };

  person.sayHi();
  return (
    <div>
      <h3>Implicit Binding</h3>
    </div>
  );
}
