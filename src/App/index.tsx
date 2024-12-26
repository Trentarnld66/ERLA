import './App.scss';
import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import CartProvider from '../pages/Cart/Provider';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import About from '../pages/About';

function App(): React.ReactElement {
  const queryClient = new QueryClient();

  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename='/ERLA'>
          <Header />

          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/catalog/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

          {/* <Routes>
        
          <Route path='/home/:movie' element={<Movie />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/genres/:genre' element={<GenreMoviesList />} />
          <Route path='/genres/:genre/:movie' element={<Movie />} />
          <Route
            path='/account'
            element={<Navigate to='/account/favorites' replace />}
          />

          <Route path='/account/:section' element={renderAccount()} />

          <Route path='/not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>  */}

          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  );
}
export default App;
