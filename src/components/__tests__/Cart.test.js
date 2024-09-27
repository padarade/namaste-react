import { render, act, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

//mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Matka Kulfi(11)");
  fireEvent.click(accordionHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(11);

  const addButtons = screen.getAllByRole("button", {
    name: "ADD +",
  });
  fireEvent.click(addButtons[0]);

  const cart = screen.getByText("Cart(1 items)");
  expect(cart).toBeInTheDocument();

  fireEvent.click(addButtons[1]);

  const cart1 = screen.getByText("Cart(2 items)");
  expect(cart1).toBeInTheDocument();

  const foodItemsinCart = screen.getAllByTestId("foodItems");
  //   11 from RestaurantMenu page and 2 form cart page
  expect(foodItemsinCart.length).toBe(13);

  fireEvent.click(
    screen.getByRole("button", {
      name: "Clear Cart",
    })
  );
  expect(screen.getByText("Cart is empty add items to cart")).toBeInTheDocument;
});
