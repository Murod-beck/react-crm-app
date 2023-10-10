function useFilters(value, currency = "USD") {
  console.log(currency);
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
  }).format(value);
}

export { useFilters };
