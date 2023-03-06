import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles & images
import './Navbar.css';
import Temple from '../assets/temple.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="athena logo" />
          <span>Athena</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">LOG IN</Link>
            </li>
            <li>
              <Link to="/signup">SIGN UP</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                LOG OUT
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging Out...
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
