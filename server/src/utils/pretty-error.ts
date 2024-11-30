import PrettyError from "pretty-error";

const PE = new PrettyError();

export const prettyError = <E extends Error>(error: E) => {
  const er = PE.render(error);

  console.error(er);
};
