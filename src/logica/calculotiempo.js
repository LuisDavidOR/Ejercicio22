export function calcularTiempo(distancia, velocidad) {
  if (velocidad <= 0) {
    throw new Error("La velocidad debe ser mayor que 0")
  }
  const tiempoHoras = distancia / velocidad

  const horas = Math.floor(tiempoHoras)
  const minutos = Math.round((tiempoHoras - horas) * 60)

  return { horas, minutos }
}