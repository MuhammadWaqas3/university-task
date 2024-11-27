import './App.css';
import Greeting from './greeting';
import Header from './components/header';
import Content from './components/content';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <h1>lab pc</h1>
      <Header/>
      <Greeting/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
