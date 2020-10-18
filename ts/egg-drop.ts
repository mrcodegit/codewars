console.log('hej')

export const eggDrop: (eggs: number, floors: number) => number = (eggs, floors) => {
    let min: number;
    if(floors === 0 || floors === 1) {
        return floors;
    }

    if(eggs === 1) {
        return floors;
    }

    for(let i = 1; i <= floors; i++) {
        let res = Math.max(eggDrop(eggs-1, i-1),eggDrop(eggs, floors - i));
        if(min === undefined) {
            min = res;
        } else if (res < min) {
            min = res;
        }
    }
    return min + 1;
}
