import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react";
import Link from "next/link"
const login = () => {
  return ( 
    <div>
      <NavBar/>
      
    <div className="flex justify-center ">
    <div className='border border-black m-7 w-72 p-4 '>
        
        <Input type="email" label="Email" /> <br/>
        <Input type="enter password" label="Enter Password" /> <br/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      LogIn
    </Button>
    <p> Don't have an account yet,</p><Link href="/register"><Button color="primary" variant="light">
        <b>Sign Up</b></Button></Link>instead.
    </div>
    </div>
    </div>
  )
}

export default login