import React from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logout } from "../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="app-container" style={{ maxWidth: 960, margin: 'auto', padding: 20 }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link to="/" style={{ marginRight: 15 }}>Accueil</Link>
            <Link to="/dashboard" style={{ marginRight: 15 }}>Dashboard</Link>
            <Link to="/profile">Profil</Link>
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

      <main>{children}</main>

      <footer style={{ marginTop: 40, borderTop: '1px solid #ddd', paddingTop: 10, textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Mon Application
      </footer>
    </div>
  )
}

export default MainLayout