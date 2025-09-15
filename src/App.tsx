import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;