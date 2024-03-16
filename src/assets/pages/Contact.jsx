import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import ContactImage from "../images2/pricing.jpg"
import Banner  from "../../components/Banner/Banner";
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Banner BannerImage={ContactImage} bannerTitle="Contact Us" pageExpectation="Get Helps & Friendly Support"/>
        <Footer/>
    </div>
  )
}

export default Contact