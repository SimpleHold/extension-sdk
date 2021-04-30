export interface IParams {
  buttonId: string
  inputId: string
}

export const isInstalled = (): boolean => {
  return document.documentElement.getAttribute('sh-ex-status') === 'installed'
}

const createButton = (): HTMLDivElement => {
  const button = <HTMLDivElement>document.createElement('div')
  button.id = 'sh-button'

  button.style.width = '106px'
  button.style.height = '30px'
  button.style.backgroundColor = '#3FBB7D'
  button.style.borderRadius = '5px'
  button.style.display = 'flex'
  button.style.flexDirection = 'row'
  button.style.alignItems = 'center'
  button.style.justifyContent = 'center'

  return button
}

const createButtonLabel = (): HTMLSpanElement => {
  const label = <HTMLSpanElement>document.createElement('span')

  label.innerText = 'SimpleHold'

  label.style.fontWeight = 'bold'
  label.style.fontSize = '12px'
  label.style.lineHeight = '14px'
  label.style.textAlign = 'center'
  label.style.color = '#FFFFFF'
  label.style.fontFamily = 'Roboto'
  label.style.margin = '0 0 0 5px'

  return label
}

const createLogo = (): HTMLImageElement => {
  const logo = <HTMLImageElement>document.createElement('img')

  logo.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUsSURBVHgB7d2PURs5FMfxZ+YKyFVwooKECs6uIKQDU0FCBQcV3KUCnAqOVICvgjgVRNcBHTh6rCAmsWXt2m8Xab+fGY1hdj3Dnx+S2F09iQAAAAAAAAAAAAAAAACjM8k5ab1eT8PL29D01YX2SlCb+9BWofnQPk0mk6UcIBmsEKj34eWDNGHCuPjQrkPAFtLB1mCFQLnwciNND4Vx86HNQsB8mzf9EqwQqjfh5U4Y7vCDDpMXIVy3uW94FixChT3e5YbrKVhx+NNQOQG2057rLGdYPNn4WOdUToDddCS7yTnxIViht5oLE3Xkmca8JD0MheHEb0JvhXw+DIenqRNO4oTdCZDPxYvmO+lQeC5Ae8ncaLD+FKC9ZG40WE6A9lzq4CSMlWsBOggT+J33mk8EMECwYIJgwQTBggmCBRMECyYIFkwQLJggWDBBsGCCYMEEwYIJggUTBAsmCBZMECx09TF18DfB0JahfZZY6aVtjYSXimANQ1cU61/8PyFI91IhgtW/RWiXtQbqEcHqjwbpsmu9qdIQrH5oqLTG1EpGgv8K7Y0uVIpg2bscW6gUwbK1GMuc6mcsWLXjpWXtzlig5Y2Uw++qrszk3c51bqhideorKbBEZ/javTTX455diafHsnO6L1iVVaf2stFDM8eyscgIlfZOWvN1KnVwod3F74tgGfmccc7fUl+lHyexRilDoY3kMBiHwG9Srxk91vHdZ0zaP0jdzgnW8eVcDH0tdXtLsIbhpG6OYA3DSeUIFkwQLJggWDDBvcKyLUP7Ks3tFL3i7aSpv+5kYASrTEtpbnIvtx2M25EMupsbQ2F5NFCz1GbgeixuovRJBkKwyqKhuso9OZw7l6Z36x3BKodvE6oN76R57r5XBKscF9JBXL/4UXpGsMrgU3OqDAvpGcEqw1c5QHzaotfhkGCVwcvhvPSIYI0HPRZ+4eRwvS4rI1hlOGh75fgodK9LywhWGV7t2zV+j/fSM4JVjr+kg9hbnUvPCFY5piEkXcI1yDIzglWWq9xw6cLR0PQJh957K0WwyqPhuolD3FZxPvYltLkMhAWrx6ePrMxSJxzxZ76UZrnZ//HzP6TpoZwMjAf9yjaVF1r7gaEQJggWTBAsmCBYw/BSOYJ1fDn35KrelSJYEazjcxnn5BRmK9mK61g2fk/tlROrI3+Rep3SY9lI3kaJGwr0vsChJw/1VwmWjZznp66kvkm8D+1aPyBYNs4fqwfvEodKvfVTy3Yo+n1QjtuYhmpvnVH9JYR2Js2aQS9l0j8QXaF9tll7lcm7Hf2Bn7bZ8DI+leCkHKtdG1ARLFu6FciljBDBsjcP4Rqs6stQCJY9NsKECZ3I/xsvio4GweqHk2YDo7mMBMHqj/ZcN/ueV68Fc6xhePlRR9RLhQjW8JbSPO2gk3tfS9AIFrpKXqMjWOgsBGuy6xiTd5ggWDBBsGCCYMEEwYIJggUTBAsmCBZMECyYIFgwQbBggmDBBMGCCYIFEwQLJjRYXoD2kiu8CRa6Sq6T1GD9J0B7ye2ENVhLAdq7TR18eGZ5vV7fyQvd4QAvkq4mOk2d8Phf4bUA+fbm5WmVBb0WMu3trdTmdSytKld7/XEc5rG85V5PwYorcGdCuLDbRe5K7WdX3mMNJ8KFn2keNFS3uW/YupI1VkPROZcTjJ12NhdtC8dtvVcYq/nqBK3kar44zGY15NbVCCc5J8VqvrrbwuvQtDJdzkZEKIsGyUtzJ+Y2hGkpAAAAAAAAAAAAAAAAANr4DvKSaZ5kZbWuAAAAAElFTkSuQmCC'

  logo.style.width = '18px'
  logo.style.height = '18px'

  return logo
}

export const init = (params: IParams): void => {
  if (isInstalled()) {
    const { buttonId, inputId } = params

    const getButton = <HTMLDivElement>document.getElementById(buttonId)
    const getInput = <HTMLInputElement>document.getElementById(inputId)

    if (getButton && getInput) {
      const button = createButton()
      const buttonLabel = createButtonLabel()
      const logo = createLogo()

      button.appendChild(logo)
      button.appendChild(buttonLabel)

      getInput.setAttribute('sh-input', 'address')
      document.getElementById(buttonId)?.replaceWith(button)
    }
  }
}
