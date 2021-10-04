import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Edituser } from './Edituser';
import { Read, Createuser } from './Read';
import { Delete } from './Delete';

function App() {

  const [user, getuser] = useState([]);
  const Getdata = () => {
    fetch("https://615156d34a5f22001701d14b.mockapi.io/users", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => getuser(newdata))
  }
  useEffect(() => {
    Getdata()
  }, [])






  return (
    <>
      <div className="main">
        <div className="links">

          <div className="link">
            <Link className="link1" to="/users">Dashboard </Link>
            <br />
            <Link className="link2" to="/create">Create User</Link>
            <br />
            <Link className="link3" to="/editprofile">Edit-profile</Link>
            <br />
            <Link className="link4" to="/delete">Delete profile</Link>
          </div>

        </div>

        <div>
          <Switch>
            {/* route first */}
            <Route path="/users">
              {user.map((element) => (

                <Read username={element.name} userpic={element.pic} />
              ))}
            </Route>

            {/* route second */}
            <Route path="/create">
              <Createuser getdata={Getdata} />
            </Route>

            {/* route third */}
            <Route path="/editprofile">
              {user.map((element) => (

                <Edituser username={element.name} userpic={element.pic} id={element.id} getdata={Getdata} />
              ))}
            </Route>
            <Route>
              {user.map((element) => (

                <Delete username={element.name} userpic={element.pic} id={element.id} getdata={Getdata} />
              ))}
            </Route>
          </Switch>

        </div>
      </div>
    </>
  );
}

export default App;


