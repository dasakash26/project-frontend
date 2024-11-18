import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Search from "./pages/Search.tsx";
import CreateOffer from "./pages/CreateOffer.tsx";
import Negotiation from "./pages/Negotiation.tsx";
import Settings from "./pages/Settings.tsx";
import Notification from "./components/Notification.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="search" element={<Search />} />
      <Route path="create-offer" element={<CreateOffer />} />
      <Route path="negotiations" element={<Negotiation />} />
      <Route path="settings" element={<Settings />} />
      <Route path="notifications" element={<Notification />} />
      <Route path="*" element={<h1 className="h-[100vh] w-[100vw]">Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
