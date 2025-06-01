import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './routes/homepage/homepage'
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import ProfilePage from './routes/profilePage/profilePage';
import PostPage from './routes/postPage/postPage';
import AuthPage from './routes/authPage/authPage';
import SearchPage from './routes/searchPage/searchPage';
import CreatePage from './routes/createPage/createPage';
import MainLayout from './routes/layouts/mainLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Homepage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/create" element={<CreatePage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    
  </StrictMode>,
)
