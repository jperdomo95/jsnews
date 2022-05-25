import Layout from './components/layout'
import News from './components/News'
import './App.css'
import { LoadingProvider } from './context/LoadingContext';

const App = () => {
  return (
    <LoadingProvider>
      <Layout>
        <News />
      </Layout>
    </LoadingProvider>
  );
}

export default App;
