
let usCurrencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    notation: "compact",
});

export function usCurrencyFormat(amount: number) {
    const formatedAmount = usCurrencyFormatter.format(amount);

    return formatedAmount;
}