"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharacters = exports.getDummyText = exports.addSuffix = exports.addPrefix = exports.extractNumber = exports.extractText = exports.decodeUri = exports.encodeUri = exports.rotate13Deg = exports.zalgo = exports.alphabetize = exports.paraToSingleLine = exports.truncate = exports.slugify = exports.reverse = exports.duplicate = exports.removeAllSymbols = exports.removeAllSpaces = exports.removeExtraSpaces = exports.base64Decode = exports.compare = exports.base64Enode = exports.joinString = exports.splitString = void 0;
/**
 * Splits a string into an array of substrings based on a specified break point and joins them with a newline character.
 *
 * @param {string} str - The string to be split.
 * @param {string} [breakPoint=" "] - The break point at which to split the string. Defaults to a space character.
 * @returns {string} The string with substrings split at the break point and joined with a newline character.
 */
const splitString = (str, delimiter = " ") => {
    const splittedString = str.split(delimiter).join("\n");
    return splittedString;
};
exports.splitString = splitString;
/**
 * Joins a string by replacing newline characters with spaces.
 *
 * @param {string} str - The input string to be joined.
 * @returns {string} The joined string with newline characters replaced by spaces.
 */
const joinString = (str) => {
    const joinedString = str.replace(/\n/g, " ");
    return joinedString;
};
exports.joinString = joinString;
/**
 * Encrypts a string using Base64 encoding.
 *
 * @param {string} str - The string to be encoded.
 * @returns {string} The encoded string.
 */
const base64Enode = (str) => {
    const encodedStr = btoa(str);
    return encodedStr;
};
exports.base64Enode = base64Enode;
/**
 * Compares a string with the Base64 encoded string.
 *
 * @param {string} str - The string to compare.
 * @param {string} encodedStr - The encoded string to compare against.
 * @returns {boolean} - Returns `true` if the string matches the encoded string, `false` otherwise.
 */
const compare = (str, encodedStr) => {
    try {
        let decodedStr = atob(encodedStr);
        if (str !== decodedStr) {
            return false;
        }
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.compare = compare;
/**
 * Decode a base64-encoded password.
 *
 * @param {string} encodedStr - The base64-encoded password to decrypt.
 * @returns {string} The decoded password.
 */
const base64Decode = (encodedStr) => {
    const decodedStr = atob(encodedStr);
    return decodedStr;
};
exports.base64Decode = base64Decode;
/**
 * Removes extra spaces from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with extra spaces removed.
 */
const removeExtraSpaces = (str) => {
    const extraSpaceFreeStr = str
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/g, "")
        .replace(/ +(\W)/g, "$1");
    return extraSpaceFreeStr;
};
exports.removeExtraSpaces = removeExtraSpaces;
/**
 * Removes all spaces from a given text.
 *
 * @returns {string} The text with all spaces removed.
 */
const removeAllSpaces = (str) => {
    const allSpaceFreeStr = str.replace(/\s+/g, "");
    return allSpaceFreeStr;
};
exports.removeAllSpaces = removeAllSpaces;
/**
 * Removes all symbols from a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} The modified string with symbols removed.
 */
const removeAllSymbols = (str) => {
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = str.match(regex);
    const symbolFreeStr = letters ? letters.join("") : "";
    return symbolFreeStr;
};
exports.removeAllSymbols = removeAllSymbols;
/**
 * Duplicates a given string a specified number of times.
 *
 * @param {string} str - The string to be duplicated.
 * @param {number} [count=2] - The number of times the string should be duplicated. Default is 2.
 * @returns {string} The duplicated string.
 */
const duplicate = (str, count = 2) => {
    const duplicatedStr = str.repeat(count);
    return duplicatedStr;
};
exports.duplicate = duplicate;
/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
const reverse = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr;
};
exports.reverse = reverse;
/**
 * Converts a string into a slug by removing special characters and replacing spaces with hyphens.
 * @param {string} str - The string to be slugified.
 * @returns {string} - The slugified string.
 */
const slugify = (str) => {
    const slugifiedStr = str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slugifiedStr;
};
exports.slugify = slugify;
/**
 * Truncates a string to a specified length.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} The truncated string.
 */
const truncate = (str, length) => {
    const truncatedStr = str.substring(0, length);
    return truncatedStr;
};
exports.truncate = truncate;
/**
 * Converts a paragraph to a single line by removing extra whitespace.
 *
 * @param {string} str - The paragraph to be converted.
 * @returns {string} The converted paragraph as a single line.
 */
const paraToSingleLine = (str) => {
    const singleLine = str.replace(/\s+/g, " ");
    return singleLine;
};
exports.paraToSingleLine = paraToSingleLine;
/**
 * Alphabetizes the words in a given string.
 *
 * @param {string} str - The input string to alphabetize.
 * @returns {string} - The alphabetized string.
 */
const alphabetize = (str) => {
    const alphabetizedStr = str
        .split(" ")
        .sort(function (a, b) {
        return a.localeCompare(b);
    })
        .join(" ")
        .toString();
    return alphabetizedStr;
};
exports.alphabetize = alphabetize;
/**
 * Generates a zalgo text by adding random diacritic characters to each character in the input string.
 * @param {string} text - The input string.
 * @returns {string} The zalgo text generated from the input string.
 */
const zalgo = (str) => {
    var Z = {
        chars: {
            0: [
                /* up */ "\u030d" /*     ̍     */,
                "\u030e" /*     ̎     */,
                "\u0304" /*     ̄     */,
                "\u0305" /*     ̅     */,
                "\u033f" /*     ̿     */,
                "\u0311" /*     ̑     */,
                "\u0306" /*     ̆     */,
                "\u0310" /*     ̐     */,
                "\u0352" /*     ͒     */,
                "\u0357" /*     ͗     */,
                "\u0351" /*     ͑     */,
                "\u0307" /*     ̇     */,
                "\u0308" /*     ̈     */,
                "\u030a" /*     ̊     */,
                "\u0342" /*     ͂     */,
                "\u0343" /*     ̓     */,
                "\u0344" /*     ̈́     */,
                "\u034a" /*     ͊     */,
                "\u034b" /*     ͋     */,
                "\u034c" /*     ͌     */,
                "\u0303" /*     ̃     */,
                "\u0302" /*     ̂     */,
                "\u030c" /*     ̌     */,
                "\u0350" /*     ͐     */,
                "\u0300" /*     ̀     */,
                "\u0301" /*     ́     */,
                "\u030b" /*     ̋     */,
                "\u030f" /*     ̏     */,
                "\u0312" /*     ̒     */,
                "\u0313" /*     ̓     */,
                "\u0314" /*     ̔     */,
                "\u033d" /*     ̽     */,
                "\u0309" /*     ̉     */,
                "\u0363" /*     ͣ     */,
                "\u0364" /*     ͤ     */,
                "\u0365" /*     ͥ     */,
                "\u0366" /*     ͦ     */,
                "\u0367" /*     ͧ     */,
                "\u0368" /*     ͨ     */,
                "\u0369" /*     ͩ     */,
                "\u036a" /*     ͪ     */,
                "\u036b" /*     ͫ     */,
                "\u036c" /*     ͬ     */,
                "\u036d" /*     ͭ     */,
                "\u036e" /*     ͮ     */,
                "\u036f" /*     ͯ     */,
                "\u033e" /*     ̾     */,
                "\u035b" /*     ͛     */,
                "\u0346" /*     ͆     */,
                "\u031a" /*     ̚     */,
            ],
            1: [
                /* down */ "\u0316" /*     ̖     */,
                "\u0317" /*     ̗     */,
                "\u0318" /*     ̘     */,
                "\u0319" /*     ̙     */,
                "\u031c" /*     ̜     */,
                "\u031d" /*     ̝     */,
                "\u031e" /*     ̞     */,
                "\u031f" /*     ̟     */,
                "\u0320" /*     ̠     */,
                "\u0324" /*     ̤     */,
                "\u0325" /*     ̥     */,
                "\u0326" /*     ̦     */,
                "\u0329" /*     ̩     */,
                "\u032a" /*     ̪     */,
                "\u032b" /*     ̫     */,
                "\u032c" /*     ̬     */,
                "\u032d" /*     ̭     */,
                "\u032e" /*     ̮     */,
                "\u032f" /*     ̯     */,
                "\u0330" /*     ̰     */,
                "\u0331" /*     ̱     */,
                "\u0332" /*     ̲     */,
                "\u0333" /*     ̳     */,
                "\u0339" /*     ̹     */,
                "\u033a" /*     ̺     */,
                "\u033b" /*     ̻     */,
                "\u033c" /*     ̼     */,
                "\u0345" /*     ͅ     */,
                "\u0347" /*     ͇     */,
                "\u0348" /*     ͈     */,
                "\u0349" /*     ͉     */,
                "\u034d" /*     ͍     */,
                "\u034e" /*     ͎     */,
                "\u0353" /*     ͓     */,
                "\u0354" /*     ͔     */,
                "\u0355" /*     ͕     */,
                "\u0356" /*     ͖     */,
                "\u0359" /*     ͙     */,
                "\u035a" /*     ͚     */,
                "\u0323" /*     ̣     */,
            ],
            2: [
                /* mid */ "\u0315" /*     ̕     */,
                "\u031b" /*     ̛     */,
                "\u0340" /*     ̀     */,
                "\u0341" /*     ́     */,
                "\u0358" /*     ͘     */,
                "\u0321" /*     ̡     */,
                "\u0322" /*     ̢     */,
                "\u0327" /*     ̧     */,
                "\u0328" /*     ̨     */,
                "\u0334" /*     ̴     */,
                "\u0335" /*     ̵     */,
                "\u0336" /*     ̶     */,
                "\u034f" /*     ͏     */,
                "\u035c" /*     ͜     */,
                "\u035d" /*     ͝     */,
                "\u035e" /*     ͞     */,
                "\u035f" /*     ͟     */,
                "\u0360" /*     ͠     */,
                "\u0362" /*     ͢     */,
                "\u0338" /*     ̸     */,
                "\u0337" /*     ̷      */,
                "\u0361" /*     ͡     */,
                "\u0489" /*     ҉_     */,
            ],
        },
        random: function (len) {
            if (len === 1)
                return 0;
            return !!len ? Math.floor(Math.random() * len + 1) - 1 : Math.random();
        },
        generate: function (str) {
            var str_arr = str.split(""), output = str_arr.map(function (a) {
                if (a === " ")
                    return a;
                for (var i = 0, l = Z.random(16); i < l; i++) {
                    var rand = Z.random(3);
                    a += Z.chars[rand][Z.random(Z.chars[rand].length)];
                }
                return a;
            });
            return output.join("");
        },
    };
    const zalgoStr = Z.generate(str);
    return zalgoStr;
};
exports.zalgo = zalgo;
/**
 * Rotates each character in a string by 13 positions in the alphabet.
 * Non-alphabetic characters remain unchanged.
 *
 * @param {string} str - The input string to be rotated.
 * @returns {string} The rotated string.
 */
const rotate13Deg = (str) => {
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    const rotatedStr = str.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    return rotatedStr;
};
exports.rotate13Deg = rotate13Deg;
/**
 * Encodes a URI string.
 *
 * @param {string} str - The URI string to be encoded.
 * @returns {string} - The encoded URI string.
 */
const encodeUri = (str) => {
    const encodedUri = encodeURI(str);
    return encodedUri;
};
exports.encodeUri = encodeUri;
/**
 * Decodes a URI string.
 *
 * @param {string} str - The URI string to decode.
 * @returns {string} - The decoded URI string.
 */
const decodeUri = (str) => {
    const decodedUri = decodeURI(str);
    return decodedUri;
};
exports.decodeUri = decodeUri;
/**
 * Extracts alphabetic characters from a given string.
 *
 * @param {string} str - The input string from which alphabetic characters will be extracted.
 * @returns {string} - The extracted alphabetic characters as a single string.
 */
const extractText = (str) => {
    const regex = /[A-Z/a-z/ /]/g;
    const letters = str.match(regex);
    const extractedText = letters ? letters.join("") : "";
    return extractedText;
};
exports.extractText = extractText;
/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
const extractNumber = (str) => {
    const regex = /[0-9/ /]/g;
    const nums = str.match(regex);
    const extractedNumber = nums ? nums.join("") : "";
    return extractedNumber;
};
exports.extractNumber = extractNumber;
/**
 * Adds a prefix to a given string.
 *
 * @param {string} str - The string to add the prefix to.
 * @param {string} prefix - The prefix to add to the string.
 * @returns {string} The resulting string with the prefix added.
 */
const addPrefix = (str, prefix) => {
    const prefixedStr = prefix.concat(str);
    return prefixedStr;
};
exports.addPrefix = addPrefix;
/**
 * Concatenates a suffix to a given string.
 *
 * @param {string} str - The original string.
 * @param {string} suffix - The suffix to be added.
 * @returns {string} - The string with the suffix added.
 */
const addSuffix = (str, suffix) => {
    const suffixedStr = str.concat(suffix);
    return suffixedStr;
};
exports.addSuffix = addSuffix;
/**
 * Generates dummy text using the "Lorem ipsum" placeholder text.
 * @returns {string} The generated dummy text.
 */
const getDummyText = () => {
    let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
    return dummyText;
};
exports.getDummyText = getDummyText;
/**
 * Generates a random string of characters.
 *
 * @param {number} limit - The length of the random string to generate.
 * @returns {string} The randomly generated string.
 */
const getRandomCharacters = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!%*~`_()[]{}<>";
    let randomCharacters = "";
    const chaactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        randomCharacters += characters.charAt(Math.floor(Math.random() * chaactersLength));
    }
    return randomCharacters;
};
exports.getRandomCharacters = getRandomCharacters;
