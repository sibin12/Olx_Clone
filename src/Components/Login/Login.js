import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {firebase} =useContext(FirebaseContext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("submitting")
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      console.log('checking completed');
    history.push('/')
    }).catch((err)=>{
      console.log(err,"errororororoorroorororoororoo");
      alert(err)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
