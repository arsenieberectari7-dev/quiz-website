import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AllQuizzesPage from './pages/AllQuizzesPage';
import QuizPage from './pages/QuizPage';
import ThisOrThatPage from './pages/ThisOrThatPage';
import CategoriesPage from './pages/CategoriesPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminQuizBuilderPage from './pages/AdminQuizBuilderPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quizzes" element={<AllQuizzesPage />} />
        <Route path="quiz/:slug" element={<QuizPage />} />
        <Route path="this-or-that" element={<ThisOrThatPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        
        {/* Informational & Legal */}
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* CMS / Admin Builder */}
        <Route path="admin/builder" element={<AdminQuizBuilderPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
