const queryStringify = (data: { [index: string]: string }) => {
  const arr = Object.entries(data);
  return arr.reduce(
    (sum, [key, val], index) => `${sum}${key}=${val}${index < arr.length - 1 ? '&' : ''}`, '?',
  );
};

export default queryStringify;
