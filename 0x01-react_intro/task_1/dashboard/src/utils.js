export const getFullYear = () => {
  return new Date().getFullYear();
}

export const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return 'Holberton School'
  }
  return 'Holberton School main dashboard'
}
