import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Home/>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment/>
            </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
           <Register/>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
