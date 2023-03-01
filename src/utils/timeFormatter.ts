export const timeFormatter = (date: string) => {
  const incomingDate = new Date(date);
  const time = incomingDate.toTimeString().slice(0, 5);

  return time;
};
