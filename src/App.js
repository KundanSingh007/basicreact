import './App.css';
import atm from './Components/atm/atm';
import cente from './Components/centeLogo/cente';
import fourlogos from './Components/fourLogos/fourlogos';
import header from './Components/Header/header';
import people from './Components/people/people';
import footer from './Components/footer/footer';



function App() {
  return (
    <div className="App">

      <div className="header">
        <header />
      </div>
      <atm />
      <fourlogos />
      <cente />
      <people />
      <footer />

    </div>
  );
}

export default App;
