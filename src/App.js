import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from './context/AuthContext'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage';
import StudentRegisterPage from './pages/StudentRegisterPage'
import LandlordRegisterPage from './pages/LandlordRegisterPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PropertyDetailPage from './pages/PropertyDetailPage'



function App() {
  return (
    <div className="App">
    <Router>
    	<AuthProvider>
	    
	      <Route component={HomePage} path="/"exact />
		  <Route component={ProfilePage} path="/profile"exact />
      <PrivateRoute component={DashboardPage} path="/dashboard"exact />
      <Route component={PropertyDetailPage} path="/property-detail/:id"exact />
	      <Route component={LoginPage} path="/login"exact />
        <Route component={RegisterPage} path="/register"exact />
	      <Route component={StudentRegisterPage} path="/student-register"exact />
        <Route component={LandlordRegisterPage} path="/landlord-register"exact />
	     
		</AuthProvider>
    </Router>
    </div>
  );
}

export default App;
