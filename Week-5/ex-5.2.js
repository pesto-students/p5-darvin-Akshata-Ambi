const isVowel = (char) => {
  return "aeiou".includes(char);
};

const vowelCount = (str) => {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCase = char.toLowerCase();
    isVowel(lowerCase)
      ? vowelMap.has(lowerCase)
        ? lowerCase.set(lowerCase, vowelMap.get(lowerCase) + 1)
        : vowelMap.set(lowerCase, 1)
      : "";
  }
  return vowelMap;
};
