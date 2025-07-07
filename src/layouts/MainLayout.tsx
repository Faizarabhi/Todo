import React from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logout } from "../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import ThemeToggle from '../components/ThemeToggle';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.user); 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  const { darkMode } = useTheme();
  return (
    <div className="app-container text-primary" style={{ maxWidth: 960, margin: 'auto', padding: 20 }}>
       <nav className='flex justify-between bg-primary p-4'>
    <div>
      <Link to="/" className="mr-4 ">Accueil</Link>
      <Link to="/dashboard" className="mr-4 text-onPrimary text-primary">Dashboard</Link>
      <Link to="/profile">Profil</Link>
    </div>
     <div className=" bg-bg text-text">
      <ThemeToggle />
    </div>
    <div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{ width: 32, height: 32, borderRadius: '50%' }}
                />
                <span>{user.name}</span>
                <button 
                  onClick={handleLogout}
                  style={{ 
                    marginLeft: 10,
                    padding: '5px 10px',
                    background: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer'
                  }}
                > 
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link to="/login">Se connecter</Link>
            )}
          </div>
  </nav> 
     
   <Outlet />
    </div>
  )
}

export default MainLayout