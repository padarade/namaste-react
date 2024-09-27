import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json";

test("it should render restaurant card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});

test("it should render restaurant card with Promoted label", () => {
    // homework
    // test - test HOC withPromotedLabel()
});
