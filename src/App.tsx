import React from 'react';
import AppRoutes from './routes/Routes';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import LoadingSpinner from './components/LoadingSpinner';
import "./output.css";

const AppContent: React.FC = () => {
  const { loading } = useLoading();
  return (
    <div className="App">
      <AppRoutes />
      {loading && <LoadingSpinner />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App;
