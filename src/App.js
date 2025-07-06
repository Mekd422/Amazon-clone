import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./components/Dataprovider/Dataprovider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";

function App() {
  const [{user}, dispatch] = useContext(DataContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.set_user,
          user: authUser
        })
      }else{
        dispatch({
          type: Type.set_user,
          user: null
        })
      }
    })

  }, [])
  return <Routing/>
}

export default App;
