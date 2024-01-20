const scrollToElementBottom = (container: HTMLElement): void => {
  setTimeout(() => {
    container.scrollTop = container.scrollHeight
  }, 50)
}

export {
  scrollToElementBottom
}
