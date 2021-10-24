import isEqual from './isEqual';

const memoize = <Data = any>(dataFunc: (state: any) => Data, actionFunc: (data: Data) => void) => {
  let memo: Data;
  return (state: any) => {
    const data = dataFunc(state);
    if (!isEqual({ a: data }, { a: memo })) {
      actionFunc(data);
      memo = data;
    }
  };
};

export default memoize;
