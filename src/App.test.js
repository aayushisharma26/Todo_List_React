import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const people = [
    {
      id: 0,
      name: 'Dear Zindagi',
      profession: 'Drama Romance',
      Description: "It's a good movie",
      image: "image_1.svg",
      votes:0
    },
    {
      id: 1,
      name: 'Mulan',
      profession: 'Adventurous Comedy',
      image: "Brave_img.svg",
      votes:0
    },
    {
      id: 2,
      name: 'Chan',
      profession: 'Adventurous Comedy',
      image: "moana.svg",
      votes:0
    },
    {
      id: 3,
      name: 'Mul',
      profession: 'Adventurous Comedy',
      image: "mulan.svg",
      votes:0
    }
  ];
