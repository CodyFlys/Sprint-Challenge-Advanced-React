import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {act} from 'react-dom/test-utils';
import { render, fireEvent, getAllByText, getByTestId, waitForElement, queryHelpers, findByTestId, findByText} from "@testing-library/react";
import App from './App';
import Button from './components/Button';
import PlayerCard from './components/PlayerCard';


test('renders without crashing', () => {
  render(<App />);
  render(<Button />);
});

test("changes bodys class to dark-mode", async () => {
  const container = render(<Button />)
  const button = container.getByText(/darkmode/i)
  fireEvent.click(button)
  expect(document.body.className).toBe("dark-mode")
})

test("Player Card and Data Renders to Page", async () => {
  const props = {
      name: 'Cody',
      country: 'USA',
      searches: '18'
  }
  const container = render(<PlayerCard {...props} />)
  const name = container.getByText('Cody')
  const country = container.getByText('USA')
  const searches = container.getByText('18')
  
  expect(name.innerHTML).toBe('Cody')
  expect(country.innerHTML).toBe('USA')
  expect(searches.innerHTML).toBe('18')
})