import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import Restaurants from "../pages/public/Restaurants";

function AppRoutes() {
  return (
    
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>} /> 
      </Route>

      {/* Pages without the main layout */}
      
    </Routes>
   
  );
}

export default AppRoutes;