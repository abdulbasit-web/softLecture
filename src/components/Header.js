import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ACTIONS, LectureContext } from '../LectureConetxt';
import Logo from '../images/Logo.png';
import './Header.css';
import { auth } from '../firebase';

function Header(props) {
  const [state, dispatch] = useContext(LectureContext);

  function handleLogout() {
    auth.signOut();
    dispatch({ type: ACTIONS.USER, user: null });
  }

  return (
    <div
      className={` flex items-center px-32 mx-auto mb-8 ${
        props.shadow && 'shadow-md'
      }`}
    >
      <img
        src={Logo}
        className="header__logo img-fluid cursor-pointer"
        alt="logo"
        style={{ width: '200px' }}
      />

      <nav className="header__nav flex flex-1 ml-8 items-center justify-between">
        <ul className="flex items-center">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <ul>
          {state.user ? (
            <li
              className="font-bold uppercase cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          ) : null
          // <li>
          //   <NavLink to="/admin/signin">SignIn</NavLink>
          // </li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Header;
