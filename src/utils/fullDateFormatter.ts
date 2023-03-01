export const fullDateFormatter = (date: string) => {
  const incomingDate = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return incomingDate.toLocaleDateString('ru-RU', options);
}
