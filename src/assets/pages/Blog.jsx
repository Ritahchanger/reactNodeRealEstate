import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import BlogImage from "../images2/about.jpg"
import Banner from "../../components/Banner/Banner";
const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Banner BannerImage={BlogImage} bannerTitle="Blog" pageExpectation="Blog Grid - Our Blogs" />
        <Footer/>
    </div>
  )
}

export default Blog