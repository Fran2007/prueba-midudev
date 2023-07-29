import { useState } from "react";
import library from "../books.json";

export const ListOfBooks = () => {
  const [isModal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (library) => {
    setSelectedImage(library);
    setModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModal(false);
  };

  return (
    <div
      className="grid gap-2 md:grid-cols-4 "
      onClick={() => openModal(library)}
    >
      {library.library.map((books, index) => (
        <div key={index}>
          <img
            key={index}
            className="w-40 h-39 object-cover rounded mx-auto border-2 border-black "
            src={books.book.cover}
          />
        </div>
      ))}
    </div>
  );
};
