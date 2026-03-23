import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/LoginPage';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { ProtectedRoute } from './features/auth/ProtectedRoute';

function App() {
    return (
        <div className="min-h-screen bg-sky-100">
            <img
                src="/logo.png"
                alt="Fhloston Paradise"
                className="fixed left-4 top-4 h-44"
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
