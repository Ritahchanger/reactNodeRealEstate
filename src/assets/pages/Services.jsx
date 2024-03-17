import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import serviceImage from "../../assets/images2/services.jpg";
import Collections from "../../components/services/collections/Collections";
import PropertyManagement from "../../components/services/propertyManagement/PropertyManagement";
import Search from "../../components/services/search/Search";

import { useState } from "react";

const Services = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
      <Navbar />

      <Banner BannerImage={serviceImage} bannerTitle="SERVICES" pageExpectation="Based on user preferences..." />

      <Search />
      <Collections />
      <PropertyManagement />
      <Footer />
    </div>
  );
};

export default Services;
