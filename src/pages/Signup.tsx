import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import axios from "axios"



const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

async function createAccount(email: string, password: string){
          await axios.post("http://localhost:3000/signup", {email, password});
          toast({
              title: "Account created",
            })
            navigate("/login")
}
  const handleSignup = () => {
    if(password === conPassword && password !== "") {
      createAccount(email, password);
    }
    else{
      toast({
        title: "Passwords don't match",
      })
    }
  }
  return (
    <>
    <div className = "flex h-screen w-full items-center justify-center px-4">
    <Card className="mx-auto max-w-sm">
      <form action=""></form>
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {/* <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input 
              id="password" 
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              required 
              />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Confirm password</Label>
              {/* <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input 
              id="conPassword" 
              type="password" 
              onChange={(e) => setConPassword(e.target.value)}
              required 
              />
          </div>
          <Button onClick= {handleSignup} type="submit" className="w-full">
            Sign Up
          </Button>
          {/* <Button variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    <Toaster />
    </>
  )
}

export default SignupPage
