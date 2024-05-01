import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
const LogIn = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex justify-center ">
    <div className='border border-black m-7 w-72 p-4 '>
        
        <Input type="email" label="Email" /> <br/>
        <Input type="enter password" label="Enter Password" /> <br/>
        <Button radius="full" color="primary">
        LogIn
    </Button><br/>
    {/*Don't have an account yet,<Link herf="/register">Sign Up</Link> instead.*/}
    </div>
    </div>
    </div>
  )
}

export default LogIn