import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Login } from "./user_auth/Login";
import { Signup } from "./user_auth/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <SideMenu /> */}
      {/* <Switch>
        {route.map((men) => {
          return <Route exact path={men.path} component={men.component} />;
        })}
        <Navigate to="/" />
      </Switch> */}
    </div>
  );
}

export default App;
