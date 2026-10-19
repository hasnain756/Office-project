import { setUser } from "@/store/userReducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SessionCheck({name, children}){

    let dispatch = useDispatch();
    let router = useRouter();

      let meraToken = localStorage.getItem('ckey');

    useEffect(function(){

        if(!meraToken){
            router.push('/login')
            return;
        }

        axios.post('/api/auth', {
            type: 'sessionCheckKaro',
            key:meraToken
        }).then(function(resp){

            dispatch( setUser(resp.data) )

            console.log(resp.data);
        })

    }, [])


    return <>
        { meraToken ? children : null}
    </>

}