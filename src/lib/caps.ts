export function firstCapital (string) {
  let words = string.split(' ');
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return result.join(' ');
}
