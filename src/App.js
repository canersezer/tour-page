import logo from './logo.svg';
import './App.css';
import  Navbar from './Components/Navbar/Navbar'
import  Main from './Components/Main/Main'
import  Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
