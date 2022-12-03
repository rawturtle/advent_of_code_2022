
export function generateAlphabet() {
    const alphabet = Array.from(Array(26)).map((_, i) => i + 65);
    const alphabetLower = alphabet.map((x) => String.fromCharCode(x).toLowerCase());
    const alphabetUpper = alphabet.map((x) => String.fromCharCode(x).toUpperCase());
    return [...alphabetLower, ...alphabetUpper]
}