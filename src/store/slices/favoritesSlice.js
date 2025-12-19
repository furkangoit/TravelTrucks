import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Başlatma sırasında localStorage'dan yükle
    loadFavoritesFromStorage: (state) => {
      try {
        const stored = localStorage.getItem('traveltrucks_favorites');
        if (stored) {
          state.items = JSON.parse(stored);
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
        state.items = [];
      }
    },
    // Favoriye ekle
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const index = state.items.findIndex(fav => fav.id === camper.id);
      
      if (index >= 0) {
        // Favorilerden çıkar
        state.items.splice(index, 1);
      } else {
        // Favorilere ekle
        state.items.push({
          id: camper.id,
          name: camper.name,
          price: camper.price,
          location: camper.location,
          image: camper.gallery?.[0] || ''
        });
      }
      
      // localStorage'a kaydet
      localStorage.setItem('traveltrucks_favorites', JSON.stringify(state.items));
    },
    // Favorileri temizle
    clearFavorites: (state) => {
      state.items = [];
      localStorage.removeItem('traveltrucks_favorites');
    }
  }
});

export const { loadFavoritesFromStorage, toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;