import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const ProtectedRoute: React.FC = () => {
    const { verifyToken } = useAuth();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setLoading(true);
                const isValid = await verifyToken();
                console.log("is valid:", isValid);
                setAuthenticated(isValid);
                
            } catch (error) {
                console.error('Error during authentication check:', error);
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [verifyToken]);
    
    
    if (!isAuthenticated && !loading) {
        console.log("not authenticated");
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;