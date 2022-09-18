import './App.css';
import HeadBanner from './components/head-banner/HeadBanner'
import MidContent from './components/MiddleContent/MidContent';

function App() {
  return (
    <div className="App">
      <HeadBanner/>
      <div className='app_style'>
      <MidContent/>
      </div>
    </div>
  );
}

export default App;
