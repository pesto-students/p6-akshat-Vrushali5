function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();

  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
        let num = lowerCaseChar.charCodeAt(0);
      if (vowelMap.has(num)) {
        vowelMap.set(num, vowelMap.get(num) + 1);
      } else {
        vowelMap.set(num, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("appleAndBanana"));