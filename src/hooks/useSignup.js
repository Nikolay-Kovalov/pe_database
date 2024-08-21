import { useState } from 'react';
import toast from 'react-hot-toast';
import {useAuthContext} from './../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({name, surname, email, password}) => {
       const success = handleInputsError({name, surname, email, password}) ;

       if(!success) return

       setLoading(true)

       try{
        const res = await fetch('http://localhost:7999/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,
                surname,
                email,
                password
            })
        })
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data)
        localStorage.setItem('PE_User', JSON.stringify(data.data))
        setAuthUser(data.data);
        toast.success('Перевірте будь-ласка пошту')
       }
       catch(error){
            toast.error(error.message)
       }
       finally{setLoading(false)}
    }
    return {loading, signup}
}

export default useSignup;

const handleInputsError = ({name, surname, email, password}) => {
if(!name || !surname || !email || !password){
    toast.error('Будь-ласка заповніть всі поля')
    return false
}
if (password.length < 6){
    toast.error('Пароль повинен бути не менше 6 знаків')
    return false
}
return true
}