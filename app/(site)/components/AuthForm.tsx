'use client'

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>("LOGIN");
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(()=>{
        if(variant == "LOGIN"){
            setVariant("REGISTER")
        }else{
            setVariant("LOGIN")
        }
    },[variant])

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });

    const onSubmitHandler:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true)

        if(variant === "REGISTER"){
            // Axios Register
        }

        if(variant === "LOGIN"){
            // NextAuth Signin
        }

        const socialAction = (action:string)=>{
            setIsLoading(true)

            // NextAuth Social Sign In
        }
    }

    return ( 
        <div> AuthForm ! </div>
     );
}
 
export default AuthForm;