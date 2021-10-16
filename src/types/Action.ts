type Action<A = any> = {
  type: string,
  payload?: A
};

export default Action;
