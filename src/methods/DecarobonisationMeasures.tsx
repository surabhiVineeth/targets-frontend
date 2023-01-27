export function gtStyleForButton(state: string, currentButtonId: string) {
  if (state === currentButtonId)
    return {
      backGroundColor: '#1E4E49',
      fontColor: '#F9F5F1',
    }
  return {
    backGroundColor: '#E7F5F3',
    fontColor: ' #102C29',
  }
}
