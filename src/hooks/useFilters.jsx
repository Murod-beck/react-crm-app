function useFilters() {
  const currencys = (value, currency = "RUB") => {
    console.log(currency);
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency,
    }).format(value);
  };
  return { currencys };
}

export { useFilters };
