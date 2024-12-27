import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex flex-col items-center space-y-2 border-b-4 border-stone-300 bg-yellow-500 px-4 py-3 font-sans uppercase sm:flex-row sm:justify-between sm:px-6">
      <Link to="/" className="w-fit tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
