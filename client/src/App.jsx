import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Aos from "aos";
import Users from './Pages/Users';
import Createuser from './Pages/Create';
import Updateuser from './Pages/Update';
import AdminViewComponent from './Pages/AdminView';

function Navbar() {
  return (
    <nav>
      <Link to="/">Users</Link>
      <Link to="/create">Create User</Link>
      <Link to="/update">Update User</Link>
      <Link to="/admin">Admin View</Link>
    </nav>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users  />} />
          <Route path="/create" element={<Createuser />} />
          <Route path="/update" element={<Updateuser />} />
          <Route path="/admin" element={<AdminViewComponent />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
