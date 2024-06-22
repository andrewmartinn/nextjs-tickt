export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  if (date.toDateString === today.toDateString) {
    return "Today";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  return date.toLocaleDateString("en-US", options);
};
