import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// before.All(() => {
//   console.log("before.All ");
// });
// before.Each(() => {
//   console.log("before Each ");
// });

// afterAll(()=>{

// })

// afterEach(()=>{
  
// })


test("Should contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Button inside Contact form", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  //getByText("Submit")

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside Contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBoxes.length).toBe(2);
  // expect(inputBoxes.length).not.toBe(3);
});

// multiple test inside describe test/it
// describe("Contact us Test pages", () => {
//   it("Should load input name inside Contact component", () => {
//     render(<Contact />);
//     const inputName = screen.getByPlaceholderText("name");

//     //Assertion
//     expect(inputName).toBeInTheDocument();
//   });

//   test("Should load 2 input boxes inside Contact component", () => {
//     render(<Contact />);
//     const inputBoxes = screen.getAllByRole("textbox");

//     //Assertion
//     expect(inputBoxes.length).toBe(2);
//     // expect(inputBoxes.length).not.toBe(3);
//   });
// });
