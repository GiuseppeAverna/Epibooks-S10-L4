import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("General Mounting", () => {
  it("mounts the title", () => {
    render(<App />);
    const h1 = screen.getByText("Tests");
    expect(h1).toBeInTheDocument();
  });

  it("correctly mounts the button:'Invia'", () => {
    render(<App />);
    const button = screen.getByText("Invia");
    expect(button).toBeInTheDocument();
  });
});

describe("'Invia' button  behavior", () => {
  it("controls that if the button is clicked, the text on the form palceholder 'Inserisci qui il testo' is truthy", () => {
    render(<App />);
    const button = screen.getByText("Invia");
    fireEvent.click(button);
    const form = screen.getByPlaceholderText("Inserisci qui il testo");
    expect(form).toBeTruthy();
  });
});
