import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
      <Route
        path="*"
        element={
          <>
          <div className=" h-[45rem] w-[75rem] bg-red-800 flex-col justify-center content-center">
fix
            <h1 className="font-mono text-white font-extrabold text-3xl">Page Not Found</h1>
          </div>
          </>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
