// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import DashboardPage from "../pages/DashboardPage";
// import HomePage from "../pages/HomePage";
// import LandlordRegisterPage from "../pages/LandlordRegisterPage";
// import LoginPage from "../pages/LoginPage";
// import ProfilePage from "../pages/ProfilePage";
// import PropertyDetailPage from "../pages/PropertyDetailPage";
// import RegisterPage from "../pages/RegisterPage";
// import StudentRegisterPage from "../pages/StudentRegisterPage";
// import PrivateRoute from "../utils/PrivateRoute";
// import "../App.css";
// export const IndexNavigation = () => {
//   return (
//     <div className="App">
//       <Router>
//         <Route component={HomePage} path="/" exact />
//         <Route component={ProfilePage} path="/profile" exact />
//         <PrivateRoute component={DashboardPage} path="/dashboard" exact />
//         <Route
//           component={PropertyDetailPage}
//           path="/property-detail/:id"
//           exact
//         />
//         <Route component={LoginPage} path="/login" exact />
//         <Route component={RegisterPage} path="/register" exact />
//         <Route component={StudentRegisterPage} path="/student-register" exact />
//         <Route
//           component={LandlordRegisterPage}
//           path="/landlord-register"
//           exact
//         />
//       </Router>
//     </div>
//   );
// };
