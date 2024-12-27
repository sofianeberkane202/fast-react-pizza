import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function LinkButton({ to, children }) {
  const navigate = useNavigate();

  const className =
    "inline-block text-sm text-blue-500 transition-colors duration-200 hover:text-blue-700 hover:underline";

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

export default LinkButton;
