export const dateFormatter = (date: string) => {
  const incomingDate = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const yymmdd = incomingDate.toLocaleDateString('ru-RU', options);
  const today = new Date().toLocaleDateString('ru-RU', options);
  const isToday = yymmdd === today
  if (isToday) return 'Cегодня'

  return yymmdd
};
