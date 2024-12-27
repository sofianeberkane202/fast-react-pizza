import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (query) navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-64 rounded-full px-4 py-2 text-sm transition-all duration-500 placeholder:text-stone-400 focus:w-72 focus:border-none focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 focus:ring-offset-2"
      />
    </form>
  );
}

export default SearchOrder;
