import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState('farmer')
  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const action = (event.nativeEvent as any).submitter.name

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsLoading(false)

    if (action === 'login') {
      // Handle login logic here
      console.log('Logging in:', { email, password, userType })
      // toast({
      //   title: "Logged in successfully",
      //   description: `Welcome back, ${userType}!`,
      // })
      navigate("/dashboard")
    } else {
      // Handle signup logic here
      console.log('Signing up:', { email, password, userType })
      // toast({
      //   title: "Signed up successfully",
      //   description: `Welcome, new ${userType}!`,
      // })
      navigate('/dashboard')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to FarmConnect</CardTitle>
          <CardDescription>Sign in or create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="signup">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" name="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" name="confirmPassword" type="password" required />
                  </div>
                </div>
              </TabsContent>
              <div className="space-y-4 mt-4">
                <Label>I am a:</Label>
                <RadioGroup defaultValue="farmer" onValueChange={setUserType} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="farmer" id="farmer" />
                    <Label htmlFor="farmer">Farmer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer">Buyer</Label>
                  </div>
                </RadioGroup>
              </div>
            </Tabs>
            <div className="flex justify-between mt-6">
              <Button type="submit" name="login" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  'Login'
                )}
              </Button>
              <Button type="submit" name="signup" variant="outline" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}