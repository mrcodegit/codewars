const testData = [["a", "c", "b", "d", "e"],
    ["d", "c", "a", "b", "e"],
    ["e", "b", "d", "a", "c"],
    ["e", "a", "b", "c", "d"],
    ["b", "c", "e", "a", "d"]];
function runoff(voters) {
    const initialObject = {};
    voters[0].forEach(vote => {
        initialObject[vote] = 0;
    });
    const candidates = voters.reduce((acc, curr) => {
        acc[curr[0]] = acc[curr[0]] ? ++acc[curr[0]] : 1;
        return acc;
    }, initialObject);
    const candidatesSorted = Object.keys(candidates).sort((a, b) => candidates[b] - candidates[a]);
    if (!voters[0].length) {
        return undefined;
    }
    else if (candidates[candidatesSorted[0]] > (voters.length) / 2) {
        return candidatesSorted[0];
    }
    else {
        let candidateToRemove;
        do {
            candidateToRemove = candidatesSorted.pop();
            voters.forEach(voter => {
                voter.splice(voter.indexOf(candidateToRemove), 1);
            });
        } while (candidates[candidateToRemove] === candidates[candidatesSorted[candidatesSorted.length - 1]]);
        return runoff(voters);
    }
}
console.log(runoff(testData));
console.log('------------------');
