import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservaSuitePresidencial from '../page';

describe('Reserva Suite Presidencial', () => {
  it('debería renderizar el formulario de reserva de la suite presidencial', () => {
    render(<ReservaSuitePresidencial />);
    // Puedes ajustar el texto según el contenido real del formulario
    expect(screen.getByText(/suite presidencial/i)).toBeInTheDocument();
  });
}); 