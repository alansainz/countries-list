import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import CountryDetail from './views/CountryDetail';
import TopBar from './components/TopBar';
import LightThemeContext, { useTheme } from './shared/hooks/useTheme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/:countryName' element={<CountryDetail />} />
    </Route>
  )
);

function App() {
  const { handleClick, lightTheme } = useTheme();

  return (
    <div>
      <main>
        <LightThemeContext.Provider value={lightTheme}>
          <TopBar handleClick={handleClick} />
          <RouterProvider router={router} />
        </LightThemeContext.Provider>
      </main>
    </div>
  );
}

export default App;
