import React, { useEffect } from 'react'
import { Heading , Button, useToast} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export default function Home() {

  const toast = useToast();

  const navigate = useNavigate();
  useEffect(()=>{
    let email= localStorage.getItem('email');
    if(email==='' || email===null){
      navigate('/login');
    }
  },[]);

  
 const signOut = ()=>{
      localStorage.removeItem('email');
      toast({
        title: 'Log out Successful.',
        position:'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
    })
      navigate('/login');
 }

  return (
    <>
    <Heading>Successfully logged in. Welcome to home page.</Heading>
    <Button onClick={signOut}>Log out</Button>
    </>
  )
}
