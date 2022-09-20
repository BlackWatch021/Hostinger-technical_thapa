import "./App.css";
import HeadBanner from "./components/head-banner/HeadBanner";
import MidContent from "./components/MiddleContent/MidContent";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <div className="app_style">
        <MidContent />
        <Plans />
      </div>
    </div>
  );
}

export default App;
