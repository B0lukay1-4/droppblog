import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import SignIn from './Authentication/SignIn';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage'; 
import HomeHeader from '../HomeHeader';
import PostCard from './PostCard';
import CreatePost from '../CreatePost';
import UserProfile from './UserProfile'; 
import FindAccount from './ForgotPassword/FindAccount';
import CheckEmail from './ForgotPassword/CheckEmail'
import EmailVerified from './ForgotPassword/EmailVerified'
import ChangePassword from './ForgotPassword/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage />
              <PostCard />
            </ErrorBoundary>
          }
        />
        <Route path="/create-post" element={<CreatePost />} />

        {/* Register or Signup */}
        <Route
          path="/Signup"
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />

        {/* Login */}
        <Route
          path="/Login"
          element={
            <ErrorBoundary>
              <SignIn />
            </ErrorBoundary>
          }
        />

        {/* User Profile */}
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <UserProfile />
            </ErrorBoundary>
          }
        />
         <Route 
         path="/forgotPassword" 
         element={
          <ErrorBoundary>
            <FindAccount/> 
          </ErrorBoundary>
          } />
          <Route path="/emailcheck"
           element={
            <ErrorBoundary>
              <CheckEmail/>
            </ErrorBoundary>
           } />
   <Route path="/verified" 
   element={
     <ErrorBoundary>
      <EmailVerified/>
     </ErrorBoundary>
    
    
    } />
    <Route path="/password/change" 
    element={
      <ErrorBoundary>
        <ChangePassword/>
      </ErrorBoundary>
      
      } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
