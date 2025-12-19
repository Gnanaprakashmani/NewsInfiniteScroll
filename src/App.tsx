import { useState } from 'react';
import LoginForm from './components/LoginForm';
import NewsList from './components/NewsList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <NewsList onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
