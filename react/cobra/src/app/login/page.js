import NavBar from "@/components/navbar/page"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
const Login = () => {
  return (
    <div>
        <NavBar/>
        <input placeholder='enter password' type='password'/> <br/>
        <input placeholder='enter email'/> <br/>
        <button className="bg-black text-white m-4">Submit</button>
    </div>
  )
}

export default Login