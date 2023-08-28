import { useState } from "react";
import data from "../books.json";

export const FilterPages = ({ setFilteredBooks }) => {
  const [filterPages, setFilterPages] = useState(0);
  const handleFilterChange = (event) => {
    const newFilterPages = parseInt(event.target.value);
    setFilterPages(newFilterPages);

    if (newFilterPages === 0) {
      setFilteredBooks(data.library);
    } else {
      setFilteredBooks(
        data.library.filter((book) => book.book.pages >= newFilterPages)
      );
    }
  };

  return (
    <article className="grid gap-2">
      <nav className="flex items-center space-x-9">
        <p className=" text-white flex items-center space-x-96 h-2">
          Filtrar por páginas:
        </p>
        <input
          type="range"
          value={filterPages}
          onChange={handleFilterChange}
          min={0}
          max={2000}
          className="h-10 w-24 space-x-9"
        />
        <input
          type="number"
          value={filterPages}
          onChange={handleFilterChange}
          min={0}
          max={2000}
          className="bg-opacity-50 border border-gray-200 rounded-xl  w-16 flex items-center "
        />
      </nav>
    </article>
  );
};
