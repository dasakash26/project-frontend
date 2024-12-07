import axios from "axios";

const getBaseURL = () => {
  if (import.meta.env.PROD) {
    // Production URL
    return 'https://project-backend-ji25.onrender.com/api/v1/';
  } else {
    // Development URL
    return 'http://localhost:3000/api/v1/';
  }
};
const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

const offerSearchRoute = "search/offer";
const createOfferRoute = "offer/create";
const negotiationRoute = "negotiation";
const profileRoute = "user/me";
export { offerSearchRoute, createOfferRoute, negotiationRoute, profileRoute };

export default api;
