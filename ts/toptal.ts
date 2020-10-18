function solution(S, K) {
    let maxLength = Number.MAX_SAFE_INTEGER
    S.split("").forEach((char, index, arr) => {
        if (K > arr.length) {
            return arr.length
        }
        let temp = S.replace(S.substr(index, K), "")
        let amount = {}
        temp.split("").forEach((char) => {
            amount[char] == undefined ? (amount[char] = 1) : amount[char]++
        })
        let ansStr = ""
        for (const char in amount) {
            ansStr += `${amount[char] == 1 ? "" : amount[char]}${char}`
        }
        maxLength = ansStr.length < maxLength ? ansStr.length : maxLength
    })
    return maxLength
}