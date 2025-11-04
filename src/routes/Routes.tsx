import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import MembershipCard from '../membership/MembershipCard';
import NewsExclusive from '../news/NewsExclusive';
import NewsRegular from '../news/NewsRegular';
import Squad from '../pages/Squad';
import Home from '../pages/Home';
import ProtectedRoute from '../ProtectedRoute';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/membership-card" element={<MembershipCard />} />
                    <Route path="/exclusive-news" element={<NewsExclusive />} />
                    <Route path="/squad" element={<Squad />} />
                    <Route path="/regular-news" element={<NewsRegular />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;