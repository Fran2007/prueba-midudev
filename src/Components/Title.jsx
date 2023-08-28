import { BooksIcons } from "./Icons/BooksIcons";

export const Title = ({ Text }) => {
  return (
    <div className="flex gap-5 justify-center ">
      <BooksIcons />
      <h3 className="text-white text-2xl text-center font-semibold">{Text}</h3>
    </div>
  );
};
