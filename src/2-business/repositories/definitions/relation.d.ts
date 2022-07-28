type IRelation<TN extends string> = {
  [key in TN]: boolean;
};

export { IRelation };
