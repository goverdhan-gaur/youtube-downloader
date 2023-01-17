export function useClipboard(bool) {

  const getClipBoardText = () => navigator.clipboard.readText().then((clipText) => clipText);

  return getClipBoardText;
}