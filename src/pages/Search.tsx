import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FilterIcon, Search } from 'lucide-react';
import api, { offerSearchRoute } from "@/api/axiosConfig";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import OfferCard from "@/components/OfferCard";
import { cropTypes } from "@/components/utils/consts";

interface Offer {
  id: string;
  cropName: string;
  description?: string;
  cropType: string;
  price: number;
  quantity: number;
  harvestTime?: string;
  location: string;
  offerDuration: number;
  paymentTerms: string;
  createdBy: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [offers, setOffers] = useState<Offer[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [cropType, setCropType] = useState("");
  const [qualityGrade, setQualityGrade] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const { toast } = useToast();

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams({
        cropName: searchQuery,
        cropType,
        qualityGrade,
        minPrice: priceRange[0].toString(),
        maxPrice: priceRange[1].toString(),
        sortBy,
      });
      const result = await api.get(`${offerSearchRoute}?${params}`);
      setOffers(result.data.offers);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error fetching data",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setCropType("");
    setQualityGrade("");
    setPriceRange([0, 100]);
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#e8f5e9] pt-16">
      <main className="container mx-auto p-6">
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Find Crops</h1>
          <div className="flex gap-2">
            <Input
              placeholder="Search crops"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 text-lg"
            />
            <Button size="lg" className="h-12 px-6" onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-3 bg-white/90 shadow-lg h-fit sticky top-20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FilterIcon className="w-5 h-5" /> Filters
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Crop Type</label>
                  <Select value={cropType} onValueChange={setCropType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Quality Grade</label>
                  <Select value={qualityGrade} onValueChange={setQualityGrade}>
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
                  <label className="text-sm font-medium">
                    Price Range (₹/kg)
                  </label>
                  <Slider
                    value={priceRange}
                    max={100}
                    step={1}
                    className="my-4"
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-9 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Showing {offers.length} results</p>
              <Select value={sortBy} onValueChange={setSortBy}>
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
              {offers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}

