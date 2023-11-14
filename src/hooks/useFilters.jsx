function useFilters() {
  const currencys = (value, currency = "RUB") => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency,
    }).format(value);
  };
  return { currencys };
}

export { useFilters };
