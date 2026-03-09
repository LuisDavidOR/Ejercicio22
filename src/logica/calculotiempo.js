export function calcularTiempo(distancia, velocidad) {
  if (velocidad <= 0) {
    throw new Error("La velocidad debe ser mayor que 0")
  }

  return distancia / velocidad
}