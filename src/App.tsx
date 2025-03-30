import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/NavbarHeader";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
