import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Edituser } from './Edituser';
import { Read, Createuser } from './Read';
import { Delete } from './Delete';
import React, { Component } from 'react';

import { render } from 'react-dom';
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
    <div className="headingtitle">
      <img className="driveimg" src="https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d" />
      <h1 className="google">Google</h1>
      <h1 className="drive">Drive</h1>
    


    </div>
      <div className="main">
        <div className="links">

          <div className="link">
            <Link className="link1" to="/users">My Drive </Link>
            <br />
            <Link className="link2" to="/create"><img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />New Folder</Link>
            <br />
            <Link className="link3" to="/editprofile">Edit Folder</Link>
            <br />
            <Link className="link4" to="/delete">Delete Folder</Link>
          </div>

        </div>

        
        <div className="gridbox">
          <Switch>
            {/* route first */}
            
            <Route path="/users" >
             <div className="boxgrid">
              {user.map((element) => (

                <Read username={element.name} userpic={element.pic} />
              ))}
              </div>
            </Route>

            {/* route second */}
            <Route path="/create">
              <Createuser getdata={Getdata} />
            </Route>

            {/* route third */}
            <Route path="/editprofile">
            <div className="boxgrid">
              {user.map((element) => (

                <Edituser username={element.name} userpic={element.pic} id={element.id} getdata={Getdata} />
              ))}
              </div>
            </Route>
            <Route>
            <div className="boxgrid">
              {user.map((element) => (

                <Delete username={element.name} userpic={element.pic} id={element.id} getdata={Getdata} />
              ))}
              </div>
            </Route>
          </Switch>
          </div>
        </div>
     
    </>
  );
}

export default App;


