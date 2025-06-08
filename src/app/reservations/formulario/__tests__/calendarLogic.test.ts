const { isDayBooked, isDayFree } = require('../calendarUtils');

describe('Lógica de calendario de reservas', () => {
  const today = new Date('2025-06-05T00:00:00');
  const bookedDates = ['2025-06-06', '2025-06-07'];

  it('marca como ocupado un día reservado', () => {
    const date = new Date('2025-06-06T00:00:00');
    expect(isDayBooked(date, bookedDates, today)).toBe(true);
  });

  it('marca como libre un día no reservado', () => {
    const date = new Date('2025-06-08T00:00:00');
    expect(isDayFree(date, bookedDates, today)).toBe(true);
  });

  it('no permite reservar un día ocupado', () => {
    const date = new Date('2025-06-06T00:00:00');
    expect(isDayFree(date, bookedDates, today)).toBe(false);
  });

  it('no marca como ocupado un día pasado', () => {
    const date = new Date('2025-06-01T00:00:00');
    expect(isDayBooked(date, bookedDates, today)).toBe(false);
  });

  it('permite reservar el día actual (hoy)', () => {
    const today = new Date('2025-06-05T00:00:00');
    const bookedDates = [];
    expect(isDayFree(today, bookedDates, today)).toBe(true);
    // Simulamos que se reserva hoy
    bookedDates.push('2025-06-05');
    expect(isDayBooked(today, bookedDates, today)).toBe(true);
  });

  it('flujo real: reservar hoy, recargar y verificar día ocupado', () => {
    // Usuario 1 reserva hoy
    const today = new Date('2025-06-05T00:00:00');
    let bookedDates = [];
    expect(isDayFree(today, bookedDates, today)).toBe(true);
    // Se reserva hoy
    bookedDates.push('2025-06-05');
    // Otro usuario recarga y ve el calendario
    expect(isDayBooked(today, bookedDates, today)).toBe(true);
    // No puede reservar el mismo día
    expect(isDayFree(today, bookedDates, today)).toBe(false);
  });
}); 