export function getGoalsModalHeight(status: boolean): { height: string } {
  if (!status) return { height: '412px' }
  return { height: '640px' }
}

export function getClassNameForGoalSelection(
  status: boolean,
  id: string
): {
  buttonClassName: string
  titleClassName: string
  contentClassName: string
} {
  const buttonClassName =
    id === 'target' ? 'absolute-relative-target' : 'business-level-goal'
  const buttonClassNameHighlighted =
    id === 'target'
      ? 'absolute-relative-target-highlighted'
      : 'business-level-goal-highlighted'
  if (!status)
    return {
      buttonClassName: buttonClassName,
      titleClassName: 'business-level-goal-title',
      contentClassName: 'goal-content',
    }
  return {
    buttonClassName: buttonClassNameHighlighted,
    titleClassName: 'business-level-goal-title-highlighted',
    contentClassName: 'goal-content-highlighted',
  }
}

export function getTargetModalHeight(
  absoluteStatus: boolean,
  relativeStatus: boolean
): string {
  if (absoluteStatus) {
    return '669px'
  }
  if (relativeStatus) {
    return '529px'
  }
  return '669px'
}
