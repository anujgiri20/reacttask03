import { useState } from 'react';



export function Edit({ username, userpic, id, setedit, getdata }) {
  const [name, setname] = useState(username);
  const [pic, seturl] = useState(userpic);
  const edituserid = () => {
    setedit(false);
    fetch("https://615156d34a5f22001701d14b.mockapi.io/users/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        pic: pic
      })
    }).then(() => getdata());
  };
  return (
    <>
      <div>
        <input
          className="userinput"
          value={name}
          onChange={(event) => setname(event.target.value)}

          placeholder="Folder name" />

        <input
          className="userinput1"
          value={pic}
          onChange={(event) => seturl(event.target.value)}
          placeholder="Enter image url" />
          
        <button className="button3" onClick={edituserid}>
          Save Changes
        </button>
      </div>
    </>

  );
}
