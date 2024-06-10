import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "routes";
import 'animate.css';
// import 'react-multi-carousel/lib/styles.css';
// import 'react-range-slider-input/dist/style.css';
// import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className="font-poppins h-full">
      <Router>
        <Routes>
          {publicRoutes.map((item, key) => (
            <Route key={key} element={item.element} path={item.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
