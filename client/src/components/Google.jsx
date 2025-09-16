import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth"
import { app } from '../firebase'
import toast from 'react-hot-toast'



const Google = () => {
    const provoider = new GoogleAuthProvider()
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
    
    provoider.setCustomParameters({ prompt: "select_account" })
    
    const handleClick = async () => {
            const auth = getAuth(app)
           try {
             const result = await signInWithPopup(auth, provoider) 
            const user = result.user
            
            console.log(user)
            const response = await fetch("http://localhost:7000/api/user/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email,
                    name: user.displayName,
                    profilePic: user.photoURL,
                })
    
            })
            if (!response.ok) {
                return console.log("Error")
            }
            const data = await response.json()
               console.log(data)
               toast.success(data.messaage)
           } catch (error) {
            console.log(error)
           }
        }

   

    return (
        <>
        <button type='submit' onClick={handleClick} className='bg-black text-white p-2 rounded-md space-x-3 px-3'>
            Continue with google
      </button>
        </>
    )
}

export default Google