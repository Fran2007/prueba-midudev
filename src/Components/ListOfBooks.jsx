import { useContext } from "react";
import { FilterBooks } from "./FilterBooks";
import { BooksContext } from "../Context";
import { Title } from "./Title";
import { FilterPages } from "../Components/FilterPages";
import { ReadingBooks } from "./ReadingBooks";

export const ListOfBooks = () => {
  const { setFilteredBooks, handleAddBook, avileBooks } =
    useContext(BooksContext);

  return (
    <>
      <FilterBooks
        className="transform -translate-y-10 px-4 border-xl"
        setFilteredBooks={setFilteredBooks}
      />
      <FilterPages setFilteredBooks={setFilteredBooks} />
      <article className="container mx-auto flex justify-center">
        <section className="w-7/12">
          <div className="border border-white min-h-screen p-10">
            <Title Text="Lista de libros: " />
            <ul className="grid gap-5 grid-cols-4">
              {avileBooks.map((item) => {
                return (
                  <li
                    key={item.book.ISBN}
                    className="flex gap-3 flex-col items-center"
                  >
                    <div>
                      <img
                        className="aspect-[9/14] object-cover w-40 h-49 rounded-xl"
                        src={item.book.cover}
                      />
                    </div>
                    <div>
                      <h5 className="text-white font-bold">
                        {item.book.title}
                      </h5>
                      <p className="text-white text-base font-semibold">
                        Autor:
                        <span className="font-normal">
                          {item.book.author.name}
                        </span>
                      </p>
                      <p className="text-white text-base font-semibold">
                        Genero:
                        <span className="font-normal">{item.book.genre}</span>
                      </p>
                    </div>
                    <div className="mt-auto w-full">
                      <button
                        onClick={() => handleAddBook(item)}
                        className="w-full text-white py-2 px-4 border rounded-xl"
                      >
                        Añadir
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <ReadingBooks />
      </article>
    </>
  );
};
