export type Maybe<T> = T | null | undefined;

export type WithClassName<T = object> = T & {
  className?: string;
};
