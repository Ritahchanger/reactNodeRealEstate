import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import serviceImage from "../../assets/images2/services.jpg";
import Collections from "../../components/services/collections/Collections"
const Services = () => {
  return (
    <div>
      <Navbar />
      <Banner
        BannerImage={serviceImage}
        bannerTitle="Services"
        pageExpectation="Services -All 
        Services"
      />
      <Collections/>



      <Footer/>
    </div>
  );
};

export default Services;
