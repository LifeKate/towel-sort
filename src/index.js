module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];

    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        if (i % 2) arr = arr.reverse();
        res = [...res, ...matrix[i]];
    }

    return res;
};
