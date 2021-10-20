const transformDate = (time: string) => {
  const date = new Date(Date.parse(time));
  return `${date.getHours()}:${date.getMinutes()}`;
};

export default transformDate;
