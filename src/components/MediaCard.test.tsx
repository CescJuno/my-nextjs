/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MediaCard from "./MediaCard";

describe("MediaCard component", () => {
  it("renders the heading and text passed as props", () => {
    render(<MediaCard heading="Test Heading" text="Test Text" />);
    const headingElement = screen.getByText("Test Heading");
    const textElement = screen.getByText("Test Text");
    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it("renders the Share and Learn More buttons", () => {
    render(<MediaCard heading="Test Heading" text="Test Text" />);
    const shareButton = screen.getByText("Share");
    const learnMoreButton = screen.getByText("Learn More");
    expect(shareButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
  });

  it("does not render the heading and text if not passed as props", () => {
    render(<MediaCard heading="" text="" />);
    const headingElement = screen.queryByText("Test Heading");
    const textElement = screen.queryByText("Test Text");
    expect(headingElement).not.toBeInTheDocument();
    expect(textElement).not.toBeInTheDocument();
  });
});
