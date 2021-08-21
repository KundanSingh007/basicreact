import React from 'react';
import './App.css';
import Atm from './Components/atm/Atm';
import Cente from './Components/centeLogo/Cente';
import Fourlogos from './Components/fourLogos/Fourlogos';
import People from './Components/people/People';
import Footer from './Components/footer/Footer';
import Sixlogos from './Components/sixLogos/Sixlogos.jsx';
import BelowHeader from './Components/belowHeader/BelowHeader';





function App() {
  return (
    <div>
      {/*<Mainheader />*/}

      <BelowHeader />
      <Sixlogos />
      <Atm />
      <Fourlogos />
      <Cente />
      <People />
      <Footer />

    </div>
  );
}

export default App;
