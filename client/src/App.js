import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import PlanList from "./components/PlanList";


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<PlanList/>} />
        </Routes>
      </div>
    </Router>
  );
  // return (
    // <Router>
    // <div className="container">
      // <div className="columns">
        // <div className="column is-half is-offset-one-quarter">
          // <Routes>
            // <Route exact path="/plans">
              // <PlanList />
            // </Route>
          // </Routes>
        // </div>
      // </div>
    // </div>
    // </Router>
  // );
}

export default App;