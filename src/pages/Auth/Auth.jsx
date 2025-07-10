import React, { useState, useContext } from 'react'
import classes from "./Auth.module.css"
import {Link, useNavigate, useLocation} from "react-router-dom"
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

  const [{user}, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  console.log(user);

  console.log(auth, error, seterror);

  const authHandler = async(e) =>{
    e.preventDefault();
    
    if(e.target.name === "signin"){
      setloading({...loading, signIn:true})

      // firebase auth
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
        dispatch({
          type: Type.SET_USER,
          user:userInfo.user
        })
        setloading({...loading, signIn: false})
        navigate(navStateData?.state?.redirect || '/');
      }).catch((err)=>{
        seterror(err.message)
        setloading({...loading, signIn: false})
      })

    }else{
      setloading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setloading({...loading, signUp:false})
        navigate(navStateData?.state?.redirect || '/');
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
      {
        navStateData?.state?.msg && (
          <small
          style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold"
          }}>
            {navStateData?.state?.msg}
          </small>
        )
      }
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

        <button name='signin' type='submit' onClick={authHandler} className={classes.login__signinbutton}>
          {loading.signIn ? (<ClipLoader color='#000' size={15}></ClipLoader>) : 
          ('Sign In')}
          
        </button>
      </form>

      <p>
        By signing in you agree to the AMAZON FAKE CLONE conditions of use & sale. 
        Please see our Privacy Notice, our Cookies and our 
        Interest-Based ADs Notice.
      </p>

      <button name='signup' type='submit' onClick={authHandler} className={classes.login__registerbutton}>
        {loading.signUp ? (<ClipLoader color='#000' size={15}></ClipLoader>) : 
          ('Create your Amazon Account')}
      </button>
      {
        error && <small style={{paddingTop: "5px", color: "red"}}>
          {error}
        </small>
      }
    </div>
  </section>
}
