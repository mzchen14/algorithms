var reverseVowels = function(s) {
    const sArr = s.split('')
    let vowels = 'aeiouAEIOU'
    let i = 0;
    let j = sArr.length-1;
    while(i < j) {
        if(!vowels.includes(sArr[i])){
            i++;
        }
        if(!vowels.includes(sArr[j])){
            j--;
        }
        if(vowels.includes(sArr[i]) && vowels.includes(sArr[j])){
            let temp = sArr[i];
            sArr[i] = sArr[j];
            sArr[j] = temp;
            i++;
            j--;
        }
    }
    return sArr.join('')
};