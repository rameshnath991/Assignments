import NavBar from "@/components/navbar/page"

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