import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import PenthouseDetailPage from './pages/PenthouseDetailPage';

function RedirectVillaToPenthouse() {
  const { slug } = useParams();
  return <Navigate to={`/penthouses/${slug}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/penthouses/:slug" element={<PenthouseDetailPage />} />
        <Route path="/villas/:slug" element={<RedirectVillaToPenthouse />} />
      </Route>
    </Routes>
  );
}
