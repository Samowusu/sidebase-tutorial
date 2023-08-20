export function useUpdateTextAreaSize (textArea?: HTMLTextAreaElement) {
  if (textArea == null) { return }
  textArea.style.height = '0'
  textArea.style.height = `${textArea.scrollHeight}px`
}
