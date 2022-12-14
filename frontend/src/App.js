import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark"> 
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>Amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
          </Navbar>
        </header>
        <main>
          {/*reactrouterdom calling home screen */}
          <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
