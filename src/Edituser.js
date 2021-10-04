import { useState } from 'react';
import { Edit } from "./Edit";

export function Edituser({ username, userpic, id, getdata }) {
  const [edituser, setedit] = useState(false);

  return (
    <>
      <div className="div1">
        <img className="userimg" style={{ width: "100px", height: "100px" }} src={userpic} alt={username} />
        <div className="usernamediv">
          <h1 className="username">{username}</h1>

          <button className="button3" onClick={() => setedit(!edituser)}>{edituser ? "Cansel edit" : "Edit Profile"}</button>
          {edituser ? <Edit username={username} userpic={userpic} id={id}
            setedit={setedit} getdata={getdata} /> : ""}
        </div>
      </div>
    </>
  );
}
