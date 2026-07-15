import { Outlet } from "react-router-dom";

import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Render the active page here */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;