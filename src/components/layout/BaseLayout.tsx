import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const BaseLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
