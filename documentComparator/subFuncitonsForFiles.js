const fs = require("fs").promises;

async function getFileValue(path) {
    try {
        const data = await fs.readFile(path, "utf-8");
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function putTextInHashMap(text, mapToFill) {
    const words = text.split(" ");
    let counter = 1;
    for (let i = 0; i < words.length; i++) {
        let wordsToPut = words[i].toLowerCase();
        if (mapToFill.has(words[i])) {
            mapToFill.set(wordsToPut, counter + 1);
        }
        else {
            mapToFill.set(wordsToPut, counter);
        }
        counter = 1;
    }
    return mapToFill;
}

async function arccosToPercent(angleInDegrees) {
    if (angleInDegrees < 0 || angleInDegrees > 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }

    let percent = 100 - (angleInDegrees / 180 * 100);
    return percent;
}


/**
 * @param {Map<string, number>} mapWithFirstText
 * @param {Map<string, number>} mapWithSecondText
 * @return {number}
 */
async function getIdentityPercent(mapWithFirstText, mapWithSecondText){
    let sumOfD1D2 = 0;
    if (!(mapWithFirstText instanceof Promise)) {
        throw new Error("mapWithFirstText is not a Map");
    }
    if (!(mapWithSecondText instanceof Map)) {
        throw new Error("mapWithSecondText is not a Map");
    }
    for (let [key, value] of mapWithFirstText) {
        if (mapWithSecondText.has(key)) {
            let result = mapWithSecondText.get(key) * value;
            sumOfD1D2 += result;
        }
    }
    sumOfD1D2 /= (mapWithFirstText.size * mapWithSecondText.size);
    return sumOfD1D2;
}



module.exports = {putTextInHashMap, getFileValue, arccosToPercent, getIdentityPercent};