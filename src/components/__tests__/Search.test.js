import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// whenever using fetch or state update wrap in act() from
it("Should render Body componet with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {
    target: {
      value: "pizza",
    },
  });
  fireEvent.click(searchBtn);
  expect(searchBtn).toBeInTheDocument();

  //screen should load 5 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(4);
});

test("should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(19);
});
