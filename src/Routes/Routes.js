import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Card from "../Components/Card/Card";
import CreateCard from "../Components/CreateCard/CreateCard";
import Cards from "../Pages/Cards/Cards";
import NotFound from "../Pages/NotFound/NotFound";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards/>} />
        {/* <Route exact path="/cards" element={<Cards/>} /> */}
        <Route path="cards/:id" element={<Card/>} />
        <Route path="/cards/new" element={<CreateCard/>} />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
