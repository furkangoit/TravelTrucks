import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFavoritesFromStorage } from './store/slices/favoritesSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CamperDetail from './pages/CamperDetail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetail />} />
      </Routes>
    </Router>
  );
}

export default App;