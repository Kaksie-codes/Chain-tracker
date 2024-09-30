import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CoursesPage from "./pages/CoursesPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./Layouts/DashBoardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the SignInPage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<SignInPage />} />

        {/* Nested routes with RootLayout */}
        <Route element={<DashboardLayout/>}>
          <Route path="/home" element={<CoursesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
