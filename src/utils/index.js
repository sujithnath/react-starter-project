export function debounce(func, delay) {
  let debounceTimer;
  return () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(), delay);
  };
}
