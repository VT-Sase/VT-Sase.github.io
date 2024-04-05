// Shared Typescript Types/Interfaces/Other Global-Variables Used Throughout the Project:

// Reference: https://www.totaltypescript.com/concepts/the-prettify-helper
// type Prettify<T> = {
//   [K in keyof T]: T[K];
// } & {};
type Officer = {
  name: string;
  role: string;
  academicYear: string;
  major: string;
  email: string;
  imageUrl: string;
};

export { Officer };
