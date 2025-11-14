import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NewsExclusive from '../news/NewsExclusive';
import NewsRegular from '../news/NewsRegular';
import EditProfile from '../pages/EditProfil';
import LoginWithCard from '../auth/LoginWithCard';
import ExclusiveInterview from '../news/ExclusiveInterview';
import MembersMeetup from '../news/MembersMeetup';
import Squad from '../pages/Squad';
import ProtectedRoute from '../ProtectedRoute';
import AraujoArticle from '../news/AraujoArticle';
import RashfordArticle from '../news/RashfordArticle';
import MatchElcheArticle from '../news/MatchElcheArticle';
import LifeExperienceArticle from '../news/LifeExperienceArticle';
import SquadBrugesArticle from '../news/SquadBrugesArticle';
import MembershipRegistration from '../membership/MembershipRegistration';


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

                    <Route path="/exclusive-news" element={<NewsExclusive />} />
                    <Route path="/exclusive-interview" element={<ExclusiveInterview />} />
                    <Route path="/members-meetup" element={<MembersMeetup />} />
                    <Route path="/membership-registration" element={<MembershipRegistration />} />

                    <Route path="/squad" element={<Squad />} />
                    <Route path="/news/araujo" element={<AraujoArticle />} />
                    <Route path="/news/rashford" element={<RashfordArticle />} />
                    <Route path="/news/match-elche" element={<MatchElcheArticle />} />
                    <Route path="/news/life-experience" element={<LifeExperienceArticle />} />
                    <Route path="/news/squad-bruges" element={<SquadBrugesArticle />} />
                    <Route path="/regular-news" element={<NewsRegular />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;