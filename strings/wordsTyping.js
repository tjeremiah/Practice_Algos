const wordsTyping = function(sentence, rows, cols) {
    let word_count = 0;
    let n = sentence.length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let wordLen = sentence[word_count % n].length;
            let remLen = wordLen - c;

            if(remLen < wordLen) break;

            c += wordLen;
            word_count++;
            
            
        }
    }
}
console.log(wordsTyping(["a", "bcd", "e"], 3, 6))