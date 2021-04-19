import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";


const Header = ({ title, onAdd, showAdd, onShow, showShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>{" "}
      <Button text={showAdd ? "Close" : "Add"} onClick={onAdd} />
      <Button text={showShow ? "Close" : "Show"} onClick={onShow} />
      <Link to='/sum'><Button text="Sum" href='/sum'/></Link>

    </header>
  );
};

Header.defaultProps = {
  title: "Activity Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
