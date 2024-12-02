import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/MainLayout.tsx";
import LoginPage from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Search from "./pages/Search.tsx";
import CreateOffer from "./pages/CreateOffer.tsx";
import Negotiations from "./pages/Negotiations.tsx";
import Settings from "./pages/Settings.tsx";
import Notification from "./components/Notification.tsx";
import NotFound from "./pages/NotFound.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import SignupPage from "./pages/Signup.tsx";
import ContractNegotiationPage from "./pages/NegotiateOffer.tsx";
import Profile from "./pages/profile.tsx";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          {/* Routes are error prone, pay attention */}
          <Route path= "/" element={<LandingPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/signup" element = {<SignupPage />} />
          
          <Route path= "/" element={<Layout />}>
            <Route path="user" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="create-offer" element={<CreateOffer />} />
            <Route path="negotiations" element={<Negotiations />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="negotiations/:negotiationID" element={<ContractNegotiationPage />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
          </>
        )
      );
      return <RouterProvider router={router} />
}

export default App

