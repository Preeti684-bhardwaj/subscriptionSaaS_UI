import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Pricing from './component/pricing/Pricing';
import SignIn from './component/SignIn/SignIn';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<Pricing/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
