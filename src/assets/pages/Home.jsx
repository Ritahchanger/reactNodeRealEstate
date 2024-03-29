import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Property from "../../components/PropertyType/Property";
import Featured from "../../components/Featured/Featured";
import Awards from "../../components/Awards/Awards";
import Destination from "../../components/Destinations/Destination";
import Customer from "../../components/customers/Customer";
import Package from "../../components/Package/Package";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title
        title="Featured Property Types"
        subtitle="Find all Type of Property "
      />
      <Property />
      <Title
        title="Recent Property Listed"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <Featured />
      <Awards />
      <Destination />
      <Customer />
      <Package />
      <Footer/>
    </div>
  );
};

export default Home;
