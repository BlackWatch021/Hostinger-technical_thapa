import "./App.css";
import HeadBanner from "./components/head-banner/HeadBanner";
import MidContent from "./components/MiddleContent/MidContent";
import Plans from "./components/Plans/Plans";
import AdditionalDetails from "./components/AdditionalDetails/AdditionalDetails";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <div className="app_style">
        <MidContent />
        <Plans />
        <AdditionalDetails />
        <Faq />
      </div>
    </div>
  );
}

export default App;
