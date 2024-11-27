import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NegotiationCard } from "@/components/Negotiation-card";
import { NegotiationPreview } from "@/components/NegotiationPreview";
import { NegotiationDetail } from "@/components/utils/types";
import { negotiationData } from "@/components/utils/data/NegotiationData";

const Negotiation = () => {
  const [showONgoing, setShowOngoing] = useState(true);
  const [ViewDetail,setViewDetail] = useState(false);
  const [getData,setgetData] = useState<NegotiationDetail> ();
	const remove = ():void =>{
		setViewDetail(false);
	}

  return (
    <div className=" w-full  mt-6 bg-gradient-to-br from-white to-[#c8ffcc] pt-16">
      <h1 className="text-3xl text-green-800 text-center font-bold  mb-2">
        Negotiations
      </h1>

      <h3 className="text-1xl text-green-800 text-center  mb-2">You will see all your negotiations here</h3>
      <div className="flex space-x-9 mb-6 mx-5">
      <Button 
      // className="bg-green-900 font-bold"
      onClick={()=>setShowOngoing(true)}
      variant={showONgoing? 'default':'outline'}
      >Ongoing Negotiations</Button>
      <Button 
      // className="bg-green-900 font-bold"
      onClick={()=>setShowOngoing(false)}
      variant={showONgoing? 'outline':'default'}
      >Completed Negotiations</Button>
      </div>
      {
        //@ts-ignore
        ViewDetail?<NegotiationPreview negotiation={getData} closeDetail={remove}/>:
        <div className="grid gap-6 md:grid-cols-2     lg:grid-cols-3 px-5">
          {
            showONgoing? negotiationData.map(
              (item)=>(
                //@ts-ignore
                item.ongoing && <NegotiationCard key ={item.negotiationID} negotiation={item} setViewDetail={setViewDetail} setgetData={setgetData}/>
              )) :
              negotiationData.map(
                (item)=>(
                  //@ts-ignore
                  !item.ongoing && <NegotiationCard key ={item.negotiationID}negotiation={item} setViewDetail={setViewDetail} setgetData={setgetData}/>
              )
            )
          }
        </div>
      }
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

