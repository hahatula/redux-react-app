import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  // TODO What should be in main? Some funny intro?
  return (
    <div className="main">
      <h1>Welcome, dear friend!</h1>
      <p>
        This app has no other purpose than for me to practice using Redux. If
        you do find yourself here, you have two options:
      </p>
      <div className="main__options">
        <Link className="main__option framed" to="/click">
          Push buttons whose states are stored by Redux
        </Link>
        <Link className="main__option framed" to="/shop">
          Visit a fake store whose items are stored by Redux
        </Link>
      </div>
      <p>Good luck!</p>
    </div>
  );
}
export default Main;
