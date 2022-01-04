import AppRoutes from './routes/AppRoutes';
import './App.css';
import { AuthProvider } from '../src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
