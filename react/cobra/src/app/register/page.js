import {Button, Input } from "@nextui-org/react";
import NavBar from "@/components/navbar/page";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex justify-center ">
    <div className='border border-black m-7 w-72 p-4 '>
        <Input type="Name" label="First Name" /> <br/>
        <Input type="Name" label="Mid Name" /> <br/>
        <Input type="Name" label="Last Name" /> <br/>
        <Input type="email" label="Email" /> <br/>
        <Input type="enter password" label="Enter Password" /> <br/>
        <Input type="enter password" label="Conform Password" /> <br/>
        <Input type="enter address" label="address" /> <br/>
        <Button color="secondary">
      Register
    </Button>
    <p>Already have an account? </p> <Link href= "/login"> <Button color="primary" variant="light"><b>Sign In </b></Button></Link>instead.
    </div>
    </div>
    </div>
  )
}

export default Register
