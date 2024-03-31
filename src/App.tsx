import React from 'react';
import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer"; 

const App: React.FC = () => {
  return (
    <div>
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
