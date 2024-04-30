import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
const LogIn = () => {
  return (
    <div className="bg-blue-800 ...">
      <NavBar/>
    <div className="flex justify-center ">
    <div className='border border-black m-7 w-72 p-4 '>
        
        <Input type="email" label="Email" /> <br/>
        <Input type="enter password" label="Enter Password" /> <br/>
        <Button radius="full" color="primary">
        LogIn
    </Button>
    </div>
    </div>
    </div>
  )
}

export default LogIn