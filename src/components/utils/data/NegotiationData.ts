import { NegotiationDetail } from "../types";

export const negotiationData:NegotiationDetail[]=
[
    {
      "cropName": "Crop 1",
      "description": "Description for Crop 1",
      "price": 79.43,
      "quantity": 4330,
      "cropType": "Spices",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 48",
      "offerDuration": "9 months",
      "paymentTerms": "Payment terms for Crop 1",
      "seasonality": "Autumn",
      "negotiationID": 1,
      "buyerName": "Buyer 1",
      "buyerImageUrl": "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
      "proposedPrice": "73.18",
      "finalPrice": "82.59",
      "status": "Awaiting Response",
      "ongoing": false
    },
    {
      "cropName": "Crop 2",
      "description": "Description for Crop 2",
      "price": 166.01,
      "quantity": 255,
      "cropType": "Nuts",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 71",
      "offerDuration": "5 months",
      "paymentTerms": "Payment terms for Crop 2",
      "seasonality": "Spring",
      "negotiationID": 2,
      "buyerName": "Buyer 2",
      "buyerImageUrl": "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
      "proposedPrice": "159.35",
      "finalPrice": "158.09",
      "status": "Awaiting Response",
      "ongoing": true
    },
    {
      "cropName": "Crop 3",
      "description": "Description for Crop 3",
      "price": 123.90,
      "quantity": 1029,
      "cropType": "Fruits",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 29",
      "offerDuration": "8 months",
      "paymentTerms": "Payment terms for Crop 3",
      "seasonality": "Winter",
      "negotiationID": 3,
      "buyerName": "Buyer 3",
      "buyerImageUrl": "https://example.com/buyer_3.jpg",
      "proposedPrice": "118.45",
      "finalPrice": "127.20",
      "status": "Counter Offer",
      "ongoing": false
    },
    {
      "cropName": "Crop 4",
      "description": "Description for Crop 4",
      "price": 240.12,
      "quantity": 836,
      "cropType": "Vegetables",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 10",
      "offerDuration": "6 months",
      "paymentTerms": "Payment terms for Crop 4",
      "seasonality": "Summer",
      "negotiationID": 4,
      "buyerName": "Buyer 4",
      "buyerImageUrl": "https://example.com/buyer_4.jpg",
      "proposedPrice": "230.35",
      "finalPrice": "242.55",
      "status": "Accepted",
      "ongoing": true
    },
    {
      "cropName": "Crop 5",
      "description": "Description for Crop 5",
      "price": 157.83,
      "quantity": 4121,
      "cropType": "Grains",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 54",
      "offerDuration": "4 months",
      "paymentTerms": "Payment terms for Crop 5",
      "seasonality": "Summer",
      "negotiationID": 5,
      "buyerName": "Buyer 5",
      "buyerImageUrl": "https://example.com/buyer_5.jpg",
      "proposedPrice": "150.25",
      "finalPrice": "162.45",
      "status": "Rejected",
      "ongoing": false
    },
    {
      "cropName": "Crop 6",
      "description": "Description for Crop 6",
      "price": 50.76,
      "quantity": 1950,
      "cropType": "Herbs",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 15",
      "offerDuration": "12 months",
      "paymentTerms": "Payment terms for Crop 6",
      "seasonality": "Winter",
      "negotiationID": 6,
      "buyerName": "Buyer 6",
      "buyerImageUrl": "https://example.com/buyer_6.jpg",
      "proposedPrice": "47.50",
      "finalPrice": "55.10",
      "status": "Awaiting Response",
      "ongoing": true
    },
    {
      "cropName": "Crop 7",
      "description": "Description for Crop 7",
      "price": 120.99,
      "quantity": 2700,
      "cropType": "Fruits",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 62",
      "offerDuration": "8 months",
      "paymentTerms": "Payment terms for Crop 7",
      "seasonality": "Spring",
      "negotiationID": 7,
      "buyerName": "Buyer 7",
      "buyerImageUrl": "https://example.com/buyer_7.jpg",
      "proposedPrice": "115.00",
      "finalPrice": "125.10",
      "status": "Counter Offer",
      "ongoing": true
    },
    {
      "cropName": "Crop 8",
      "description": "Description for Crop 8",
      "price": 220.67,
      "quantity": 1120,
      "cropType": "Vegetables",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 39",
      "offerDuration": "7 months",
      "paymentTerms": "Payment terms for Crop 8",
      "seasonality": "Autumn",
      "negotiationID": 8,
      "buyerName": "Buyer 8",
      "buyerImageUrl": "https://example.com/buyer_8.jpg",
      "proposedPrice": "210.85",
      "finalPrice": "221.45",
      "status": "Accepted",
      "ongoing": false
    },
    {
      "cropName": "Crop 9",
      "description": "Description for Crop 9",
      "price": 35.78,
      "quantity": 5432,
      "cropType": "Herbs",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 85",
      "offerDuration": "6 months",
      "paymentTerms": "Payment terms for Crop 9",
      "seasonality": "Spring",
      "negotiationID": 9,
      "buyerName": "Buyer 9",
      "buyerImageUrl": "https://example.com/buyer_9.jpg",
      "proposedPrice": "34.10",
      "finalPrice": "37.45",
      "status": "Awaiting Response",
      "ongoing": false
    },
    {
      "cropName": "Crop 10",
      "description": "Description for Crop 10",
      "price": 185.33,
      "quantity": 1600,
      "cropType": "Spices",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 72",
      "offerDuration": "5 months",
      "paymentTerms": "Payment terms for Crop 10",
      "seasonality": "Winter",
      "negotiationID": 10,
      "buyerName": "Buyer 10",
      "buyerImageUrl": "https://example.com/buyer_10.jpg",
      "proposedPrice": "178.90",
      "finalPrice": "190.50",
      "status": "Rejected",
      "ongoing": true
    },
    {
      "cropName": "Crop 11",
      "description": "Description for Crop 11",
      "price": 250.45,
      "quantity": 2150,
      "cropType": "Fruits",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 54",
      "offerDuration": "3 months",
      "paymentTerms": "Payment terms for Crop 11",
      "seasonality": "Summer",
      "negotiationID": 11,
      "buyerName": "Buyer 11",
      "buyerImageUrl": "https://example.com/buyer_11.jpg",
      "proposedPrice": "245.20",
      "finalPrice": "252.30",
      "status": "Awaiting Response",
      "ongoing": true
    },
    {
      "cropName": "Crop 12",
      "description": "Description for Crop 12",
      "price": 302.87,
      "quantity": 1100,
      "cropType": "Grains",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 16",
      "offerDuration": "10 months",
      "paymentTerms": "Payment terms for Crop 12",
      "seasonality": "Autumn",
      "negotiationID": 12,
      "buyerName": "Buyer 12",
      "buyerImageUrl": "https://example.com/buyer_12.jpg",
      "proposedPrice": "295.10",
      "finalPrice": "310.25",
      "status": "Accepted",
      "ongoing": false
    },
    {
      "cropName": "Crop 13",
      "description": "Description for Crop 13",
      "price": 65.44,
      "quantity": 700,
      "cropType": "Herbs",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 8",
      "offerDuration": "11 months",
      "paymentTerms": "Payment terms for Crop 13",
      "seasonality": "Winter",
      "negotiationID": 13,
      "buyerName": "Buyer 13",
      "buyerImageUrl": "https://example.com/buyer_13.jpg",
      "proposedPrice": "62.40",
      "finalPrice": "68.70",
      "status": "Awaiting Response",
      "ongoing": false
    },
    {
      "cropName": "Crop 14",
      "description": "Description for Crop 14",
      "price": 192.77,
      "quantity": 2200,
      "cropType": "Nuts",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 29",
      "offerDuration": "8 months",
      "paymentTerms": "Payment terms for Crop 14",
      "seasonality": "Spring",
      "negotiationID": 14,
      "buyerName": "Buyer 14",
      "buyerImageUrl": "https://example.com/buyer_14.jpg",
      "proposedPrice": "186.55",
      "finalPrice": "197.90",
      "status": "Counter Offer",
      "ongoing": true
    },
    {
      "cropName": "Crop 15",
      "description": "Description for Crop 15",
      "price": 268.29,
      "quantity": 1984,
      "cropType": "Other",
      "harvestTime": new Date().toLocaleDateString('en-GB'),
      "location": "Location 50",
      "offerDuration": "11 months",
      "paymentTerms": "Payment terms for Crop 15",
      "seasonality": "Spring",
      "negotiationID": 15,
      "buyerName": "Buyer 15",
      "buyerImageUrl": "https://example.com/buyer_15.jpg",
      "proposedPrice": "253.81",
      "finalPrice": "254.12",
      "status": "Awaiting Response",
      "ongoing": false
    }
  ]
  