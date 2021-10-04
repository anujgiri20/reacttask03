export function Delete({ username, userpic, id, getdata }) {
  const Deleteuser = () => {
    fetch("https://615156d34a5f22001701d14b.mockapi.io/users/" + id,
      { method: "DELETE" }
    ).then(() => getdata());
  };
  return (
    <>
      <div className="div1">
        <img className="userimg" style={{ width: "100px", height: "100px" }} src={userpic} alt={username} />
        <div className="usernamediv">
          <h1 className="username">{username}</h1>
          <button className="button3" onClick={Deleteuser}>Delete user</button>
        </div>
      </div>
    </>
  );
}
