import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider();

    // update user profile
    const updateUserProfile = (name, photo)=>{
        console.log(name);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })

    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

         
    }

    const logOut =()=>{
       
        return signOut(auth)
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current User', currentUser);
            //get, set token
            if(currentUser){
                axios.post('https://b7a12-summer-camp-server-side-jewelislam360.vercel.app/jwt',{email: currentUser.email})
                .then(data=>{
                    console.log(data.data);
                    localStorage.setItem('access-token', data.data)
                    setLoading(false);

                })
            }
            else{
                localStorage.removeItem('access-token')
                
            }
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[])

        
    
    



    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
        
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;