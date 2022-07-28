type IWhere<C extends string, V> = {
  [key in C]: V;
};

export { IWhere };
