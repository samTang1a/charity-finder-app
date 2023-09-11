import { useEffect, useState,  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';

import HomePage from './pages/HomePage';
import CharityDetailPage from './pages/CharityDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import Search from './components/Search';
import Charity from './charity';

function App() {
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || "");
  const [charityItems, setCharityItems] = useState<Charity[]>([]);
  const [favorites, setfavorites] = useState<Charity[]>([]);

  useEffect(() => {
    axios.get(`https://partners.every.org/v0.2/search/${search || 'conservation'}?take=9&apiKey=pk_live_d9408606fff625e1ee88c0fd35d9c010`).then(rsp => {
      setCharityItems(rsp?.data?.nonprofits)

      const storedFavorites = localStorage.getItem('favorites')
      if (storedFavorites) { setfavorites(JSON.parse(storedFavorites)) }

    }).catch(err => {
      console.log('error:', err)
    })
  }, [search])

  const handleSearch = (match: string) => {
    localStorage.setItem('search', match)
    setSearch(match)
    window.location.href = '/'
  }

  const handleAddFavorite = (item: Charity) => {
    const updatedFavorites = [...favorites, item]
    setfavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const handleRemoveFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(f_item => f_item.ein != id)
    setfavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
    <>
      <Search handleSearch={handleSearch}/>
      <Router>
        <Routes>
          <Route path="/"            element={<HomePage          search={search} charityItems={charityItems} handleSearch={handleSearch} />} />
          <Route path="/charity/:id" element={<CharityDetailPage charityItems={charityItems} favorites={favorites} addFavorite={handleAddFavorite} removeFavorite={handleRemoveFavorite} />} />
          <Route path="/favorites"   element={<FavoritesPage     favorites={favorites} />} />
          <Route path="*"            element={<div><p>404 Page not found</p></div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
