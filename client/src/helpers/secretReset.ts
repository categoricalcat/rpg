const secretReset = (fn: (e: KeyboardEvent) => void) =>
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'KeyN' || !e.altKey) return;

    fn(e);
    window.location.reload();
  });

export default secretReset;
