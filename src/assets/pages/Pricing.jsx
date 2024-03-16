import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import PricingImage from "../images2/pricing.jpg";
import Banner from "../../components/Banner/Banner";
const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Banner BannerImage={PricingImage} bannerTitle="30 days money back guarantee" pageExpectation="No Extra Fees. Friendly" />
        <Footer/>
    </div>
  )
}

export default Pricing