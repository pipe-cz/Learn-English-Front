/* eslint-disable no-undef */
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WriteGame from './WriteGame';

// Mocking the imported words to make the test predictable
jest.mock('../../../auxility/words/words', () => [
  { id: 1, english: 'apple', spanish: 'manzana' },
  { id: 2, english: 'orange', spanish: 'naranja' },
  { id: 3, english: 'banana', spanish: 'plátano' },
]);

test('permite al usuario ingresar respuestas y verificar los resultados', () => {
  // Renderizar el componente WriteGame
  render(<WriteGame />);

  // Verificamos que las palabras en inglés se renderizan
  expect(screen.getByText(/apple/i)).toBeInTheDocument();
  expect(screen.getByText(/orange/i)).toBeInTheDocument();
  expect(screen.getByText(/banana/i)).toBeInTheDocument();

  // Simulamos la entrada del usuario en los inputs
  fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'manzana' } });
  fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'naranja' } });
  fireEvent.change(screen.getAllByRole('textbox')[2], { target: { value: 'incorrecto' } });

  // Simulamos el clic en el botón "Verificar respuestas"
  fireEvent.click(screen.getByText(/verificar respuestas/i));

  // Verificamos que los resultados correctos se muestren
  expect(screen.getByText(/Correctas: 2 \/ 10/i)).toBeInTheDocument();

  // Verificamos que los errores se muestren correctamente
  expect(screen.getByText(/La traducción de "banana" es "plátano"/i)).toBeInTheDocument();
  expect(screen.getByText(/Tu respuesta: "incorrecto"/i)).toBeInTheDocument();
});
