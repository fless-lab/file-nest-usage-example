import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import UserList from "./components/UserList";
import UserForm from "./components/AddUser";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<UserList />} />
        <Route path="/add" exact element={<UserForm />} />
        <Route path="/view/:userId" exact element={<UserDetails />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
