import './App.css';
// import Test from './components/Test';
import Header from 'components/Header';
import TextContainer from './components/TextContainer';

function App() {
  return (
    <div className="App">
  {/* <Test />*/}
      <Header />
      <main>
         <TextContainer/>
      </main>
    </div>
  );
}

export default App;
