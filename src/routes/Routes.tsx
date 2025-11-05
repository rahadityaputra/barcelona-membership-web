import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
// import MembershipCard from '../membership/MembershipCard';
import MembershipRegistration from '../membership/MembershipRegistration';
import NewsExclusive from '../news/NewsExclusive';
import NewsRegular from '../news/NewsRegular';
import ProtectedRoute from '../ProtectedRoute';
import EditProfile from '../pages/EditProfil';
import LoginWithCard from '../auth/LoginWithCard';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login-with-card" element={<LoginWithCard />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    {/* <Route path="/membership-card" element={<MembershipCard />} /> */}
                    <Route path="/membership-registration" element={<MembershipRegistration />} />
                    <Route path="/exclusive-news" element={<NewsExclusive />} />
                    <Route path="/regular-news" element={<NewsRegular />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;