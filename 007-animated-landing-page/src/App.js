import './App.css';
// import Test from './components/Test';
import Header from 'components/Header';
import TextContainer from './components/TextContainer';
import BannerContainer from './components/BannerContainer';

function App() {
  return (
    <div className="App">
  {/* <Test />*/}
      <Header />
      <main>
         <TextContainer/>
         <BannerContainer />
      </main>
    </div>
  );
}

export default App;
