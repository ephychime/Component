import { render, screen } from '@testing-library/react';
import { Userdetails } from './App';

test('renders learn react link', () => {
  render(<Userdetails />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
