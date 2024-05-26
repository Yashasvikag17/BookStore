import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();
export const AuthContext = createContext(); // Exporting the context

function Authprovider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginWithGoogle = () =>{
        setLoading(true);
      return  signInWithPopup(auth,googleProvider);
    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut =() =>{
        return  signOut(auth)
    } 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
    
        return () => {
            unsubscribe();
        };
    }, []);
    

    const authInfo = {
        currentUser,
        
        createUser,
        loginWithGoogle,
        loading,
        login,
        LogOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default Authprovider;
// export const { loginWithGoogle } = authFunctions;