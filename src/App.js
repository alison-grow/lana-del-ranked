import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Albums from './Components/Albums';
import Unreleased from './Components/Unreleased';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Homepage /> */}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Homepage />
            </>
          }
          />
          <Route path="Albums" element={
            <>
              <Header />
              <Albums />
            </>
          }
          />
          <Route path="Unreleased" element={
            <>
              <Header />
              <Unreleased />
            </>
          }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
