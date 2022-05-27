import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import News from './pages'
import Favorites from './pages/Favorites'
import './App.css'
import { LoadingProvider } from './context/LoadingContext';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="favorites" element={<Favorites />} />
            </Routes>
          </Layout>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
