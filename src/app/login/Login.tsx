

"use client"
import React, { useState } from 'react';
import { DefaultButton, Text, TextField } from "@fluentui/react";
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function Login() {
  const [credentials, setCredentials] = useState<Record<string, string>>({});
    const router = useRouter();



  return (
    <div className='max-w-4xl mx-auto flex flex-col justify-center w-full items-center py-40'>
        <Text variant='xxLarge'>Login page</Text>
        
        <div className="">
            <form className='flex flex-col gap-4 pt-5' onSubmit={handleLogin}>
                <div>
                    <TextField 
                      className='w-96' 
                      type='email' 
                      placeholder="Please enter your email" 
                      name="email" 
                      id='email'
                      onChange={handleChange} 
                    />
                </div>

                <div>
                    <TextField 
                      placeholder="Please enter your password" 
                      type="password" 
                      canRevealPassword 
                      revealPasswordAriaLabel="Show password" 
                      name="password" 
                      id='password'
                      onChange={handleChange} 
                    />
                </div>
                <DefaultButton className='w-28' text="Login now" type="submit" allowDisabledFocus />
            </form>
        </div>
        <Text className='pt-4' variant='medium'>Don&apos;t have an account? <Link className='text-green-500 font-normal' href='/register'>Register now</Link></Text>
    </div>
  );
}
