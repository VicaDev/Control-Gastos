export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(amount)
}
//Función para formatear el tipo de moneda