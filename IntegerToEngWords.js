var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero'
    }//if num is equal to 0, return Zero


    if(num <= 20) {
        return translation.get(num)
    } //if num is under 20, return the num from translations Map
    
    let result = [] //initialize result's array

    for (let [value, translation] of translations) {
        const times = Math.floor(num/value)
        //for each value in translations, divide the num by the value
        if(times === 0) {
            continue //if times is 0, skip
        }
        
        num -= times * value //otherwise, nums is equal to nums - times*value
        
        if(times === 1 && value >= 100) {
            result.push('One', translation)
            continue

            //if times === 1 and value is greater than 100, then push One first, and then the word from translations
        }
        
        if(times === 1) {
            result.push(translation) //otherwise if times === 1, push translation
            continue
        }
        result.push(numberToWords(times), translation) //recursive call to numberOfWords, returns the times and the word translation (ex 2 Hundred...)
    }
    return result.join(' ') //return result joined by a space
    
}

const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);