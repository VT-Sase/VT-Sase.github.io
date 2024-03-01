// Shared Typescript Types/Interfaces/Other Global-Variables Used Throughout the Project:

// Reference: https://www.totaltypescript.com/concepts/the-prettify-helper
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export {};
