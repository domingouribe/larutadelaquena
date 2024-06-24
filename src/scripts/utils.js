// src/scripts/utils.js
export const interShippingCLP = 30000; // Costo de envío internacional en pesos chilenos
export const changeDolarCLP = 918.38; // Tipo de cambio en pesos chilenos

export function formatCLP(priceCLP) {
    return priceCLP.toLocaleString("es-CL");
}

export function calculateTotalUSD(priceCLP) {
    const priceUSD = priceCLP / changeDolarCLP; // Precio en dólares
    const interShippingUSD = interShippingCLP / changeDolarCLP; // Costo de envío en dólares

    // Calcular el precio total en dólares sumando el precio y el costo de envío
    let totalUSD = priceUSD + interShippingUSD;

    // Redondear el precio total en dólares hacia arriba si la parte decimal es mayor o igual a 0.5
    totalUSD = Math.ceil(totalUSD);

    // Formatear el precio total en dólares
    return totalUSD.toFixed(0); // No especificar decimales para mostrar el número entero redondeado hacia arriba
}

export function getFormattedPrices(priceCLP) {
    return {
        formattedPriceCLP: formatCLP(priceCLP),
        formattedTotalUSD: calculateTotalUSD(priceCLP)
    };
}
