import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load header login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("Should have cart items empty", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart(0 items)");
  //   const loginButton = screen.getByText("Login");

  expect(cartItem).toBeInTheDocument();
});

test("Should render Header with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //regex
  const cartItem = screen.getByText(/Cart/);
  //   const loginButton = screen.getByText("Login");

  expect(cartItem).toBeInTheDocument();
});

test("Should change Login button to Logout in Header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
