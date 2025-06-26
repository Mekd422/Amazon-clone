import React, { useState, useContext } from 'react'
import classes from "./Auth.module.css"
import {Link} from "react-router-dom"
import amazonLogo from '../../assets/amazon assets/image.png';
import {auth } from "../../Utility/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {DataContext} from "../../components/Dataprovider/Dataprovider"
import { Type } from "../../Utility/action.type";
import {ClipLoader} from "react-spinners"


export default function Auth() {

  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState({
    signIn:false,
    signUp: false
  })

  const [{user}, dispatch] = useContext(DataContext)

  console.log(user);

  console.log(auth, error, seterror)

  const authHandler = async(e) =>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name === "signin"){
      setloading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
        dispatch({
          type: Type.set_user,
          user:userInfo.user
        })
        setloading({...loading, signIn: false})
      }).catch((err)=>{
        seterror(err.message)
        setloading({...loading, signIn: false})
      })

    }else{
      setloading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
        dispatch({
          type:Type.set_user,
          user:userInfo.user
        })
        setloading({...loading, signUp:false})
      }).catch((err)=>{
        seterror(err.message)
        setloading({...loading, signUp:false})
      })

    }
  }
  console.log(authHandler)

  return <section className={classes.login}>
    <Link to= "/">
    <img src={amazonLogo} alt="amazonlogo" />
    </Link>

    <div className={classes.login_container}>
      <h1>Sign In</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e)=>setemail(e.target.value)}
           type="email" id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)}
          type="password" id='password' />
        </div>

        <button className={classes.login__signinbutton}>
          Sign In
        </button>
      </form>

      <p>
        By signing in you agree to the AMAZON FAKE CLONE conditions of use & sale. 
        Please see our Privacy Notice, our Cookies and our 
        Interest-Based ADs Notice.
      </p>

      <button className={classes.login__registerbutton}>
        Create Your Amazon Account
      </button>
      {
        error && <small style={{paddingTop: "5px", color: "red"}}>
          {error}
        </small>
      }
    </div>
  </section>
}
