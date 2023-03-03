const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Company</a>
        </li>
        <li className="nav-link">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
