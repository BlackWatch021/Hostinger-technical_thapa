import "./App.css";
import HeadBanner from "./components/head-banner/HeadBanner";
import MidContent from "./components/MiddleContent/MidContent";
import Plans from "./components/Plans/Plans";
import AdditionalDetails from "./components/AdditionalDetails/AdditionalDetails";
import Faq from "./components/FAQ/Faq";
import Return from "./components/ReturnPolicy/Return";
import Footer from "./components/Footer/Footer";
import Rating from "./components/Rating/Rating";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeadBanner />
      <div className="app_style">
        <MidContent />
        <Plans />
        <Return />
        <Rating />
        <AdditionalDetails />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
