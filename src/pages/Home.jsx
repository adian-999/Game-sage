import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import "../App.css";
import Section from "../components/Section";
import Cards from "../components/Cards";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div style={{ fontFamily: 'Kranky, serif' }}>

      <nav>
        <Navbar></Navbar>
      </nav>
      <Banner></Banner>
      <section>
        <Section></Section>
      </section>

      <section>
        <h2 className="text-center text-purple-950 font-bold text-4xl my-12">Here are some reviews of greatest games</h2>
        <Cards></Cards>
      </section>

      <section>
        <Section2></Section2>
      </section>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default Home;
