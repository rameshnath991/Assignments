'use client'

import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const Required=()=>{
  return(
  <div textcolor="red-900">
 <h1>  *It is required*!!!  </h1> 
  </div>
)}
const SignupSchema = Yup.object().shape({
  
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(Required),    
  email: Yup.string().email('Invalid email').required(Required),

});

const login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return ( 

    <div>
      <NavBar/>
      
    <div className="flex justify-center bg-green-50 m-4 p-10 ">
    <div className='border border-black m-7 w-72 p-4 rounded-lg bg-slate-400 '>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
      <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      onChange={formik.handleChange}
      name="email"
      value={formik.values.email}
      placeholder="Enter your email"
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />

{formik.errors.email}
    <Input
      isClearable
      type="password"
      label="Password"
      variant="bordered"
      onChange={formik.handleChange}
      name="password"
      value={formik.values.password}
      placeholder="Enter your password"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
       {formik.errors.password}

        <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      LogIn
    </Button>
    <p> Don't have an account yet,</p><Link href="/register"><Button color="primary" variant="light">
        <b>Sign Up</b></Button></Link>instead.
  </form>
    </div>
    </div>
    </div>
  );
};

export default login