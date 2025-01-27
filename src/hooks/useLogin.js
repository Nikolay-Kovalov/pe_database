import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const login = async ({email, password}) => {
    
        const success = handleInputsError({email, password});

        if(!success) return
    
        setLoading(true)
    
        try{
            const res = await fetch('http://localhost:7999/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({email, password})
            },
)
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("PE_User", JSON.stringify(data.data.user))
            setAuthUser(data.data.user)
        }
        catch(error){
            toast.error(error.message)
        }
        finally{setLoading(false)}
    }

    return {loading, login}
  
}

export default useLogin;

const handleInputsError = ({email, password}) => {
    if(!email || !password){
        toast.error('Будь-ласка заповніть всі поля')
        return false
    }
    return true
}