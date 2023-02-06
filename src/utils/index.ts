export const toPascalCase = function (str) {
  return str
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
};


export const toKebabCase = (str) => {
  return toPascalCase(str).replace(/[A-Z]/g, '-$&').toLowerCase().substring(1);
}
