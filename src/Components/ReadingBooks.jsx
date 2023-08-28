import { useContext } from "react";
import { BooksContext } from "../Context";

export const ReadingBooks = () => {
  const { handleRemoveBook, readingBooks } = useContext(BooksContext);

  return (
    <section className="hidden w-5/12 md:flex justify-center items-start">
      <div className="border border-white min-h-screen p-10 overflow-y-scroll">
        <h3 className="text-white text-center text-2xl font-semibold mb-10">
          Libros leídos:
        </h3>
        <ul className="grid gap-5 grid-cols-1">
          {readingBooks.map((item) => {
            return (
              <li key={item.book.ISBN} className="flex gap-2">
                <div>
                  <img
                    className="aspect-[9/14] object-cover w-40 h-49 rounded-xl"
                    src={item.book.cover}
                  />
                </div>
                <div>
                  <h5 className="text-xl font-bold bg-opacity-50 text-white py-1">
                    {item.book.title}
                  </h5>
                  <p className="text-white text-base font-semibold">
                    Genero:
                    <span className="font-normal">{item.book.genre}</span>
                  </p>
                  <p className="text-white text-base font-semibold">
                    Autor:
                    <span className="font-normal">{item.book.author.name}</span>
                  </p>
                </div>
                <div className="ml-auto items-start">
                  <button
                    onClick={() => handleRemoveBook(item)}
                    className="flex items-center border border-red-400 rounded-xl py-2 px-4"
                  >
                    <small className="text-red-400">Eliminar</small>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
