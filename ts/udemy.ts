function divisibleSumPairs(n, k, ar) {
    let result = 0;
    while(ar.length) {
        const a = ar.shift();
        ar.forEach(item => {
            if((item + a) % k === 0) {
                result += 1;
            }
        })
    }
    console.log(result);
    return result;
}
divisibleSumPairs(6, 3, [1,3,2,6,1,2]);