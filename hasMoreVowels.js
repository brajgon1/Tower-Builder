function hasMoreVowels (word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0;
    let consonant = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount++;
        } else {
            consonant++;
        }
    }
    if (vowelCount > consonant) {
        return true;
    } else {
        return false;
    }
}

console.log(hasMoreVowels('candy'))