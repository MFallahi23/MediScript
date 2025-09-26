const formatDate = (data: string | number | Date): string => {
  const date = new Date(data);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
};

export { formatDate };
