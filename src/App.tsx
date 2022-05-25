import Layout from './components/layout'
import Index from './components/News/Index'
import './App.css'
import { LoadingProvider } from './context/LoadingContext';

const App = () => {
  return (
    <LoadingProvider>
      <Layout>
        <Index />
      </Layout>
    </LoadingProvider>
  );
}

export default App;
