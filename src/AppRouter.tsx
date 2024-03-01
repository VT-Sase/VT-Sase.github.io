import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Example } from "./components";

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Custom React Routes Go Here */}
          <Route path="/" element={<Example />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
