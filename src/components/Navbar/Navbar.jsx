import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <h3>Collins Oduor</h3>
      </div>
      <div className="menu">
        <svg
          width="35"
          height="35"
          viewBox="0 0 79 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.637238H78.75V14.2408H0V0.637238ZM0 34.646H78.75V48.2496H0V34.646ZM0 68.6548H78.75V82.2584H0V68.6548Z"
            fill="#AB4E68"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
