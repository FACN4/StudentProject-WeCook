/*global test expect */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { render, fireEvent } from 'react-testing-library';
import Gallery from './Gallery';


const testImages = ["https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg", "https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg", "https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg", "https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg"]

test('Jest is working', () => {
  expect(1).toBe(1);
});

// test('Clicking the small images replaces it with a larger image', () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<Gallery images={testImages}/>, root);
//   document.body.appendChild(root);
//   const buttonNode = root.querySelector('button');
//   buttonNode.click();
//   const childrenNode = root.lastChild;
//   expect(childrenNode.textContent).toEqual('just clicked');
// });
