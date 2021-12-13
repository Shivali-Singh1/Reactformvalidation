import React, { useState } from "react";
import "./App.css";

import MultipleInputs from "./component/forms/multipleInputs";

function App() {
  const [userRegisteration, setuserRegisteration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(name, value);

    setuserRegisteration({ ...userRegisteration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("her");
    const newRecord = {
      ...userRegisteration,
      id: new Date().getTime().toString(),
    };

    setRecords([...records,newRecord]);
    console.log(newRecord,"newRecordnewRecord");

    setuserRegisteration({
      ...userRegisteration,
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlfor="username">Fullname</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegisteration.username}
            onChange={handleInput}
            name="username"
            id="usesrname"
          />
        </div>

        <div>
          <label htmlfor="email">Email</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegisteration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlfor="phone">username</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegisteration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlfor="password">password</label>
          <input
            type="password"
            autocomplete="off"
            value={userRegisteration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Registration</button>
      </form>

      <div>
        {records.map((curElem) => {
          const { id, username, email, phone, password } = curElem;
          return (
            <div classname="showDataStyle" key={curElem.id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;