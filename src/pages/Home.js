import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const LaptopView = () => {
  // Render two components together
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
const MobileView = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleButtonClick = () => {
    // Toggle the display of Component1 and Component2
    setShowSidebar(!showSidebar);
  };

  // Render only one component at a time based on state
  return (
    <div className="home">
      <div className="container">
        {showSidebar ? <Sidebar /> : <Chat />}
        <button onClick={handleButtonClick}>👈</button>
      </div>
    </div>
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <> {isMobile ? <MobileView /> : <LaptopView />}</>;
};

export default Home;
