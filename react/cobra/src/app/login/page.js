import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
const LogIn = () => {
  return (
    <div className="flex justify-center ">
    <div> 
        <NavBar/>
        <Input type="email" label="Email" /> <br/>
        <Input type="enter password" label="Enter Password" /> <br/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Log In
    </Button>
    </div>
    </div>
  )
}

export default LogIn