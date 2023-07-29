import Modal from "react-modal";
import Draggable from "react-draggable";

export const BooksModals = ({ isOpen, closeModal, selectedBook }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="book-modal"
      overlayClassName="book-modal-overlay"
    >
      {selectedBook && (
        <Draggable handle=".handle">
          <div className="flex flex-col md:flex-row">
            <div className="handle w-full md:w-2/5">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-full"
              />
            </div>
            <div className="p-4 md:w-3/5">
              <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
              <p>{selectedBook.description}</p>
            </div>
          </div>
        </Draggable>
      )}
      <button className="mt-4 p-2 bg-gray-500 text-white" onClick={closeModal}>
        Cerrar Modal
      </button>
    </Modal>
  );
};
