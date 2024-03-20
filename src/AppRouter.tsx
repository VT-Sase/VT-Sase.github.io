import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Officers_2018_19,
  Officers_2019_20,
  Officers_2021_22,
  Officers_2022_23,
  Officers_2023_24,
  CurrentEvents,
  YearInReview,
  Sponsors,
  NotFound
} from "./components";

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* VT SASE Website React Routes Go Here (Add More Below in the Future If Necessary) */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<CurrentEvents />} />
          <Route path="/year-in-review" element={<YearInReview />} />
          <Route path="/sponsors" element={<Sponsors />} />

          {/* Officer Routes (First 2 are Current - Must Update Every Year To Be IDENTICAL */}
          <Route path="/officers" element={<Officers_2023_24 />} />
          <Route path="/officers/current" element={<Officers_2023_24 />} />
          <Route path="/officers/2022-23" element={<Officers_2022_23 />} />
          <Route path="/officers/2021-22" element={<Officers_2021_22 />} />
          <Route path="/officers/2019-20" element={<Officers_2019_20 />} />
          <Route path="/officers/2018-19" element={<Officers_2018_19 />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
