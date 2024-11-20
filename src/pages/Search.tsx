import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Wheat, FilterIcon} from 'lucide-react' //sliderhorizontal
import { useState } from 'react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([0, 100])

  const sampleCrops = [
    { id: 1, name: 'Organic Wheat', type: 'Wheat', price: '$0.8/kg', quality: 'Premium', seller: 'ABC Farms', location: 'Punjab', rating: 4.5 },
    { id: 2, name: 'Premium Rice', type: 'Rice', price: '$1.2/kg', quality: 'Premium', seller: 'XYZ Agro', location: 'West Bengal', rating: 4.8 },
    // Add more sample data as needed
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#e8f5e9] pt-16">
      <main className="container mx-auto p-6">
        {/* Search Header */}
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Find Crops</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search crops, sellers, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 text-lg"
              />
            </div>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Search
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <Card className="lg:col-span-3 bg-white/90 shadow-lg h-fit sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FilterIcon className="w-5 h-5" /> Filters
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Crop Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Quality Grade</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="basic">Basic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range ($/kg)</label>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    className="my-4"
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Showing {sampleCrops.length} results</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4 auto-rows-max">
              {sampleCrops.map((crop) => (
                <Card key={crop.id} className="bg-white/90 hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Wheat className="w-5 h-5 text-emerald-600" />
                          <h3 className="font-semibold text-lg">{crop.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600">Seller: {crop.seller}</p>
                        <p className="text-sm text-gray-600">Location: {crop.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
                            {crop.quality}
                          </span>
                          <span className="text-sm text-gray-600">⭐ {crop.rating}</span>
                        </div>
                      </div>
                      <p className="font-bold text-lg text-emerald-600">{crop.price}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
