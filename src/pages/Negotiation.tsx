"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wheat, CropIcon as Corn, Carrot, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const cropIcons = {
  Wheat: Wheat,
  Corn: Corn,
  Carrot: Carrot,
}

type Negotiation = {
  id: string
  farmerName: string
  crop: keyof typeof cropIcons
  quantity: string
  price: string
  status: 'pending' | 'accepted' | 'rejected'
  lastUpdated: string
}

const negotiations: Negotiation[] = [
  { id: '1', farmerName: 'John Doe', crop: 'Wheat', quantity: '1000 kg', price: '$0.50/kg', status: 'pending', lastUpdated: '2h ago' },
  { id: '2', farmerName: 'Jane Smith', crop: 'Corn', quantity: '2000 kg', price: '$0.45/kg', status: 'pending', lastUpdated: '5h ago' },
  { id: '3', farmerName: 'Bob Johnson', crop: 'Carrot', quantity: '500 kg', price: '$0.75/kg', status: 'accepted', lastUpdated: '1d ago' },
  { id: '4', farmerName: 'Alice Brown', crop: 'Wheat', quantity: '1500 kg', price: '$0.48/kg', status: 'rejected', lastUpdated: '2d ago' },
]

export default function NegotiationsOverview() {
  const [activeTab, setActiveTab] = useState('ongoing')

  const filteredNegotiations = negotiations.filter(neg => 
    activeTab === 'ongoing' ? neg.status === 'pending' : neg.status !== 'pending'
  )

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-10 pt-30'>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Negotiations Overview</h1>
      
      <Tabs defaultValue="ongoing" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ongoing">Ongoing Negotiations</TabsTrigger>
          <TabsTrigger value="completed">Completed Negotiations</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Ongoing Negotiations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredNegotiations.map(renderNegotiationCard)}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Completed Negotiations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredNegotiations.map(renderNegotiationCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}

function renderNegotiationCard(negotiation: Negotiation) {
  const CropIcon = cropIcons[negotiation.crop]
  
  return (
    <Card key={negotiation.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{negotiation.farmerName}</CardTitle>
        <CropIcon className="h-5 w-5 text-green-600" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Crop:</span> {negotiation.crop}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Quantity:</span> {negotiation.quantity}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Price:</span> {negotiation.price}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-gray-500">{negotiation.lastUpdated}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge 
          variant={negotiation.status === 'pending' ? 'outline' : 'default'}
          className={`
            ${negotiation.status === 'accepted' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
            ${negotiation.status === 'rejected' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
          `}
        >
          {negotiation.status === 'pending' && <Clock className="h-4 w-4 mr-1" />}
          {negotiation.status === 'accepted' && <CheckCircle className="h-4 w-4 mr-1" />}
          {negotiation.status === 'rejected' && <AlertCircle className="h-4 w-4 mr-1" />}
          {negotiation.status.charAt(0).toUpperCase() + negotiation.status.slice(1)}
        </Badge>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

