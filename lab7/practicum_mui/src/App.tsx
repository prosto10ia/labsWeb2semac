import NavBar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar active="1" />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
}

export default App;