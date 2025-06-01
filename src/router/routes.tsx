import React, { lazy, Suspense } from 'react';
import { Route, Routes as RouterRoutes, Navigate } from 'react-router';
import Loading from '@/components/common/Loading';

// Lazy-loaded pages
// const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Register = lazy(() => import('../pages/authentication/Register'));
const Login = lazy(() => import('../pages/authentication/Login'));
const ForgotPassword = lazy(() => import('../pages/authentication/ForgotPassword'));
const NewPassword = lazy(() => import('../pages/authentication/NewPassword'));
const General = lazy(() => import('../pages/setting/General'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        {/* <Route element={<AuthRestrictRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route> */}

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/general" element={<General />} />
        
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </Suspense>
  );
};