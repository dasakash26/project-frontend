import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Handshake, FileSignature, Search, ChevronRight, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-green-800">
        <Link className="flex items-center justify-center" to="#">
          <Leaf className="h-8 w-8 text-green-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
            AgriPact
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium hover:text-green-400 transition-colors" to="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-green-400 transition-colors" to="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-green-400 transition-colors" to="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
                  Revolutionizing
                  <br />
                  Agricultural Contracts
                </h1>
                <p className="mx-auto max-w-[700px] text-green-300 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
                  Connecting farmers and buyers with innovation and trust.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-400 text-green-950 hover:bg-green-300 text-lg px-8 py-6 rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 text-lg px-8 py-6 rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
              Transforming Agribusiness
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-green-800 border-green-700">
                <CardContent className="flex flex-col items-center p-6">
                  <Handshake className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-200">Smart Contracts</h3>
                  <p className="text-center text-green-300">Create and manage contracts with ease and intelligence.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-800 border-green-700">
                <CardContent className="flex flex-col items-center p-6">
                  <Search className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-200">Efficient Negotiations</h3>
                  <p className="text-center text-green-300">Streamline discussions and reach agreements faster.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-800 border-green-700">
                <CardContent className="flex flex-col items-center p-6">
                  <FileSignature className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-200">Secure Signatures</h3>
                  <p className="text-center text-green-300">Sign and authenticate contracts with cutting-edge security.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-green-900 border-green-700">
                <CardContent className="p-6">
                  <p className="text-green-200 mb-4 text-lg">
                    "AgriPact has transformed our approach to contract farming. It's innovative, secure, and incredibly efficient."
                  </p>
                  <p className="font-bold text-green-400">- Maria Rodriguez, Organic Farm Owner</p>
                </CardContent>
              </Card>
              <Card className="bg-green-900 border-green-700">
                <CardContent className="p-6">
                  <p className="text-green-200 mb-4 text-lg">
                    "Finding and negotiating with farmers has never been this seamless. AgriPact is a game-changer for our supply chain."
                  </p>
                  <p className="font-bold text-green-400">- Alex Chen, Procurement Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-900 to-green-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">
                Ready to Transform Your Agribusiness?
              </h2>
              <p className="mx-auto max-w-[600px] text-green-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                Join AgriPact today and experience the future of contract farming.
              </p>
              <Button className="bg-green-400 text-green-950 hover:bg-green-300 text-lg px-8 py-6 rounded-full mt-8">
                Get Started Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-950 border-t border-green-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-green-400">© 2024 AgriPact. All rights reserved.</p>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:text-green-400 transition-colors" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-green-400 transition-colors" to="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:text-green-400 transition-colors" to="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

