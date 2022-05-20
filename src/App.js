// import ReactDOM from "react-dom/client";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import {Home, About} from './pages';
import Home from './pages/Home';
import About from './pages/About';
// import { Form, Button } from 'react-bootstrap';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    
  );
}

export default App;
