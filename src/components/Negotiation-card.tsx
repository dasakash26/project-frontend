import {Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent, } from "./ui/card";
	import { Avatar,AvatarImage } from "./ui/avatar";
import { NegotiationDetail } from "./utils/types";
import { DetailItem } from "./DetailCard";
import { Button } from "./ui/button";
import React from "react";
import { Link } from "react-router-dom";
// import { NegotiationPreview } from "./NegotiationPreview";
// import { useState } from "react";
// import { boolean } from "zod";

interface negotiationCard{
	negotiation: NegotiationDetail;
	setViewDetail:React.Dispatch<React.SetStateAction<boolean>>;
	setgetData:React.Dispatch<React.SetStateAction<NegotiationDetail>>;
}
export const NegotiationCard:React.FC<negotiationCard>=({negotiation,setViewDetail,setgetData})=>{
	const handleClick= ():void =>{
		setViewDetail(true);
		setgetData(negotiation);
	}
	return(
	<>
	{
		<Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
		<CardHeader className="bg-green-100 text-green-800 font-semibold text-lg m-0 py-1">
			<CardTitle>
				<div className="flex justify-between">
					<div className="flex flex-col">
						{negotiation.cropName}
						<CardDescription><p className="my-3 text-black text-3">Negotiation ID :- {negotiation.id}</p>
						</CardDescription>
					</div>
					<div className=" text-black flex items-center gap-5">
						{negotiation.buyerName}
						<Avatar>
							<AvatarImage src={negotiation.buyerImageUrl}/>
						</Avatar>
					</div>
				</div>
			</CardTitle>
		</CardHeader>
		<CardContent className="py-4 font-bold flex flex-col gap-2">
			<span className="font-bold"><DetailItem label="Crop" value={negotiation.cropName}/></span>
			<DetailItem label="Quantity" value={negotiation.quantity}/>
			{
				negotiation.ongoing? <DetailItem label="Proposed Price" value={negotiation.proposedPrice}/> :<DetailItem label="Final Price" value={negotiation.finalPrice}/>
			}
			<DetailItem label="Negotiation Status" value={negotiation.status}/>
			<DetailItem label="Harvest Date" value={String(negotiation.harvestTime)}/>
		</CardContent>
		<CardFooter>
			<div className="flex flex-row justify-between w-full">
				<Button onClick={
					handleClick
				}>View Details</Button>
				<Link to={`/negotiations/${negotiation.id}`}><Button>Negotiate</Button></Link>
			</div>
		</CardFooter>
	</Card>
	}
	</>
	)
}