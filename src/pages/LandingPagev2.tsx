import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Leaf } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
      <main className="w-full max-w-md mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-16 w-16 text-green-600" />
            <h1 className="ml-2 text-5xl font-bold text-gray-900">AgriPact</h1>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Connecting farmers and buyers
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link to="/login">
            <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-2 rounded-md text-lg w-full sm:w-auto">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-8 py-2 rounded-md text-lg w-full sm:w-auto">
              Sign Up
            </Button>
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Streamline agricultural contracting with trust and efficiency
        </p>
      </main>

      <footer className="absolute bottom-4 w-full text-center">
        <nav className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link to="#" className="hover:underline">About</Link>
          <Link to="#" className="hover:underline">Privacy</Link>
          <Link to="#" className="hover:underline">Terms</Link>
        </nav>
      </footer>
    </div>
  )
}



