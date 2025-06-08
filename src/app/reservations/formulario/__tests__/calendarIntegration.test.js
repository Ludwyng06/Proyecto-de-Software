const { isDayBooked, isDayFree } = require('../calendarUtils');

describe('Integración: flujo de actualización de fechas ocupadas', () => {
  it('al reservar un día y recargar, el día aparece como ocupado para otros usuarios', async () => {
    // Simulamos el backend: fechas ocupadas iniciales
    let bookedDatesBackend = [];
    // Usuario 1 reserva el día de hoy
    const today = '2025-06-05';
    expect(isDayFree(new Date(today + 'T00:00:00'), bookedDatesBackend, new Date(today + 'T00:00:00'))).toBe(true);
    // Se reserva hoy
    bookedDatesBackend.push(today);
    // Simulamos que otro usuario recarga y obtiene las fechas ocupadas actualizadas
    const bookedDatesFrontend = [...bookedDatesBackend];
    // El día debe aparecer como ocupado
    expect(isDayBooked(new Date(today + 'T00:00:00'), bookedDatesFrontend, new Date(today + 'T00:00:00'))).toBe(true);
    // No debe poder reservar el mismo día
    expect(isDayFree(new Date(today + 'T00:00:00'), bookedDatesFrontend, new Date(today + 'T00:00:00'))).toBe(false);
  });
}); 