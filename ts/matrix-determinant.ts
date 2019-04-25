export function determinant(matrix: number[][]) {
    if(matrix.length === 1){
        return matrix[0];
    } else if(matrix.length === 2){
        return (matrix[0][0] * matrix[1][1]) - (matrix[1][0] * matrix[0][1]) 
    }
}