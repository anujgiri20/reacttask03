import { useState } from 'react';

export function Read({ username, userpic }) {

  return (
    <>
      <div className="div1">
        <img className="userimg" style={{ width: "100px", height: "100px" }} src={userpic} alt={username} />
        <h1 className="username">{username}</h1>
      </div>
    </>
  );
}
export function Createuser({ getdata }) {
  const [value_name, setname] = useState("");
  const [value_pic, setpic] = useState("");
  const [add, useradded] = useState("");

  const clearfeild = () => {
    setpic("");
    setname("");
    useradded("New user added successfully , check in Dashboard");
  };

  const adduser = () => {

    fetch("https://615156d34a5f22001701d14b.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: value_name,
          pic: value_pic
        })
      }).then(() => getdata());
    setpic("");
    setname("");
    useradded("New folder added successfully , check in Dashboard");
  };

  return (
    <>
      <div className="inputdivbox">
        <input
          className="input1"
          value={value_name}
          onChange={(event) => setname(event.target.value)}
          placeholder="Folder name" />
        <br />
        <input
          className="input2"
          value={value_pic}
          onChange={(event) => setpic(event.target.value)}
          placeholder="Enter image url" />
        <br />
        
        <button className="button" onClick={adduser}>Create folder</button>
        <h1 className="popup">{add}</h1>
      </div>
    </>
  );
}
