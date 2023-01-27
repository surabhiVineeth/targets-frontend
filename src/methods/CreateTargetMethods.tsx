export function getClassNameForTargetSelection(
  status: boolean,
  id: string,
  buttonId: string
): string {
  if (id === 'Yes') {
    if (status && buttonId === id) {
      return 'button-1-crt-highlighted'
    }
    return 'button-1-crt'
  }
  if (status && buttonId === id) return 'button-2-crt-highlighted'
  return 'button-2-crt'
}

export function getClassNameForButton(
  status: boolean,
  buttonId: string
): { buttonClassName: string; disableStatus: boolean } {
  if (!status || buttonId === 'No')
    return { buttonClassName: 'button-4-crt', disableStatus: true }
  return { buttonClassName: 'button-4-crt-highlighted', disableStatus: false }
}

export function getClassNameForProductIntensity(
  status: boolean,
  id: string,
  buttonId: string
): string {
  if (status) {
    if (buttonId === id) return 'button-ct1-1-highlighted'
    return 'button-ct1-1'
  }
  return 'button-ct1-1'
}

// export function getFieldIdFilledStatus(productIntensityId :  string, fieldFilledStatusObj : any): string{
//   if(productIntensityId === 'Absolute'){
//     return fieldFilledStatusObj.
//   }
// }

export function getAlertStatus(
  fieldFilledStatus: boolean,
  nextButtonClickStatus: boolean
): boolean {
  if (nextButtonClickStatus && !fieldFilledStatus) return true
  return false
}

export function getWidthOfInput(productIntensityId: string): {
  [key: string]: string
} {
  if (productIntensityId === 'Absolute') {
    return {
      width1: '394px',
      width2: '192px',
    }
  }
  return {
    width1: '470px',
    width2: '168px',
  }
}
