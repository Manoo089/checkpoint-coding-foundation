function zipStrings(strA, strB) {
    let mergedString = "";
    let charA = "";
    let charB = "";

    if (strA === "") {
        mergedString = strA + strB;
    } else {
        for (let i = 0; i < strA.length; i++) {
            charA = strA[i].slice(0, i.length);
            mergedString = mergedString + charA;

            for (let j = 0; j < strB.length; j++) {
                if (i === j) {
                    charB = strB[j].slice(0, j.length);
                    mergedString = mergedString + charB;
                }
            }
        }
    }
    return mergedString;
}