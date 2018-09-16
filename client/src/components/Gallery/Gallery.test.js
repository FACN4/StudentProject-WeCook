/*global test expect */
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import { render, fireEvent } from "react-testing-library";
import Gallery from "./Gallery";

const testImages = [
  {
    imageUrl:
      "https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg",
    isThumbnail: true
  },
  {
    imageUrl:
      "https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg",
    isThumbnail: true
  },
  {
    imageUrl:
      "https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg",
    isThumbnail: true
  },
  {
    imageUrl:
      "https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg",
    isThumbnail: true
  }
];

test("Clicking the small gallery image replaces it with a larger image", () => {
  const { getByTestId } = render(<Gallery images={testImages} />);

  const mainImage = getByTestId("largeImg");
  const smallImage = getByTestId("smallImg");

  const mainImageSrc = mainImage.src;
  const smallImageSrc = smallImage.src;
  fireEvent.click(smallImage);
  expect(mainImage.src).toEqual(smallImageSrc);
  expect(smallImage.src).toEqual(mainImageSrc);
  fireEvent.click(smallImage);
  expect(mainImage.src).toEqual(mainImageSrc);
});
