import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CamperDetail from './pages/CamperDetail';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<CamperDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;