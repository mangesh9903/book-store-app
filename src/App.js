import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from './components/LoginPage';
import DashBoard from './components/DashBoard';
import HomePage from './components/HomePage ';
import Registrartion from './components/Registrartion';
import ForgetPassword from './components/ForgetPassword';


function App() {
  return (
    <div className="App">
   

      <Router>
        <Switch>
          <Route  path="/login" component={LoginPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/reg" component={Registrartion}></Route>
          <Route path="/dashboard" component={DashBoard}></Route>
          <Route path="/forgetPassword" component={ForgetPassword}></Route>
        </Switch>
      </Router>
      {/* <Registrartion/> */}
    </div>
  );
}

export default App;
