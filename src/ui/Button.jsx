import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ type, to, isSubmiting, children }) {
  const base = `
    inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase
    tracking-wide transition-colors duration-300 hover:bg-yellow-500
    focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:bg-stone-600
  `;

  let style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: `
      inline-block text-sm rounded-full border-2 border-stone-300
      px-4 py-2.5 md:px-6 md:py-3.5 text-stone-400 font-semibold uppercase
      tracking-wide transition-colors duration-300 
      hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800
      focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2
      focus:bg-stone-300 disabled:cursor-not-allowed disabled:bg-stone-600

    `,
  };

  if (to)
    return (
      <Link to={to} className={`${style[type]}`}>
        {children}
      </Link>
    );

  return (
    <button disabled={isSubmiting} className={`${style[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  isSubmiting: PropTypes.bool,
  children: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
