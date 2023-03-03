import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Logout from './components/Auth/Logout';
import Protected from './components/Auth/Protected';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
<Router>
<Header/>
<Routes>
<Route path="/Home" element={<Protected Component={Home}/>}>   </Route>
<Route path="/Login" element={<Protected Component={Login}/>}>  </Route>
<Route path="/logout" element={<Logout/>}>  </Route>
<Route path="/*" element={<PageNotFound/>}>  </Route>
</Routes>
</Router>
  );
}
export default App;
