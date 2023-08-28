import { useState } from "react";
import { motion } from "framer-motion";
import { GENERE_BOOKS } from "../Constants/GenreBooks";
import data from "../books.json";

export const FilterBooks = ({ setFilteredBooks }) => {
  const [books, setBooks] = useState([
    "Fantasía",
    "Ciencia ficción",
    "Zombies",
    "Terror",
    "Economía",
  ]);

  const filtersBooks = (genre) => {
    if (genre === GENERE_BOOKS) {
      setFilteredBooks(data.library);
    } else {
      const filteredBooks = data.library.filter(
        (item) => item.book.genre === genre
      );
      setFilteredBooks(filteredBooks);
    }
  };

  return (
    <article className="grid gap-4 space-x-0">
      <nav>
        <motion.select
          className="grid gap-4 border border-gray-200 rounded-xl "
          onChange={(event) => filtersBooks(event.target.value)}
        >
          <option value={GENERE_BOOKS}>Todos</option>
          {books.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </motion.select>
      </nav>
    </article>
  );
};
