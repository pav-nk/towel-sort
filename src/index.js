
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix
        .map((item, index) => {
            if ((index + 1) % 2 === 0) return item.reverse();
            return item;
        })
        .flat();
};
