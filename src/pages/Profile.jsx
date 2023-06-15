import {useState,useEffect} from 'react'
import {getAuth} from 'firebase/auth' 


function Profile() {
  const [User, setUser] =useState(null)

  const auth = getAuth()
  useEffect(()=>{
    setUser(auth.currentUser)
  },[])
    
  return User ? <h1>{User.displayName}</h1> : 'Not logged in'
}
  
  export default Profile