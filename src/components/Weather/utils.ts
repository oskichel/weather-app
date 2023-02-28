export const dateFormatter = (date: string) => {
  const incomingDate = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const yymmdd = incomingDate.toLocaleDateString('ru-RU', options);
  const today = new Date().toLocaleDateString('ru-RU', options);
  
  if (yymmdd === today) {
    return 'Cегодня';
  } else return yymmdd;
};

export const timeFormatter = (date: string) => {
  const incomingDate = new Date(date);
  const time = incomingDate.toTimeString().slice(0, 5);

  return time;
};


export const longDateFormatter = (date: string) => {
  const incomingDate = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return incomingDate.toLocaleDateString('ru-RU', options);
}