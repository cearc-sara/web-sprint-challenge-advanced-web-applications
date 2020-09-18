import React, {useState} from "react";
import {useHistory} from 'react-router'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialValue = {
  username:'',
  password:''
}

const Login = () => {
 const [credentials, setCredentials] = useState(initialValue)
 const history = useHistory()

 const handleChange = e => {
   setCredentials({...credentials, [e.target.name]: e.target.value})
 }

 const login = e => {
   e.preventDefault()

   axiosWithAuth()
   .post("/api/login", credentials)
   .then(res => {
     console.log(res)
     localStorage.setItem("token", res.data.payload)
     history.push("/protected")
   })
   .catch(err => {
     console.log(err)
   })
 }
  return (
    <>
      <form onSubmit={login}>
      <label>Username&nbsp;</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password&nbsp;</label>
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
