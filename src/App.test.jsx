import { render } from "@testing-library/react";
import { FilterBooks } from "./Components/FilterBooks";
import { test } from "vitest";

test("FilteredOfBooks", () => {
  it("Should show title all the time", () => {
    const setFilteredBooks = jest.fn();
    render(<FilterBooks setFilteredBooks={setFilteredBooks} />);
    expect(setFilteredBooks).not.toHaveBeenCalled();
  });
});
