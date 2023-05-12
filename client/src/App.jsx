import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, RegisterForm,Footer } from './components';
import { CampaignDetails, CreateCampaign, Home, MyCampaigns,AllCampaigns,AboutUs,Condition } from './pages';

const App = () => {

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if MetaMask is installed and connected
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isConnected()) {
      setIsConnected(false);
    }
  }, []);


  return (
    <div className="relative sm:bg-[#ffff] min-h-screen">
      {/* <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div> */}
      {/* Render the Popup component only if the user is connected */}
      {isConnected && <RegisterForm />}
      {/* Rest of your app's content */}
      <div className="p-4 bg-[#13131a]">
        <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/terms&conditions" element={<Condition />} />
          <Route path="/mycampaigns" element={<MyCampaigns />} />
          <Route path="/contribute" element={<AllCampaigns />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>

        <Footer />
    </div>
  )
}

export default App