import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        {/*  */}
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        {/*  */}

        <Route path="/logout" component={Logout}></Route>

        {/* Protected route for Login */}
        <Protected exact path="/" component={Home} />

        <Protected path="/detail" component={RestaurantDetail} />
        <Protected path="/list" component={RestaurantList} />
        <Protected path="/create" component={RestaurantCreate} />
        <Protected path="/search" component={RestaurantSearch} />
        <Protected path="/update/:id" component={RestaurantUpdate} />
      </Router>
    </div>
  );
}

export default App;
