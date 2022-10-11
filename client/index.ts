export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

const $input = $("#chat") as HTMLInputElement | null;
if (!$input) throw new Error("Nao achou input");

$input.addEventListener("keydown", (e) => {
  if (e.code !== "Enter") return;

  alert("enviado");
});
