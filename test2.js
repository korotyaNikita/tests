function validSolution(board) {
    const isValid = (group) => {
        const nums = group.filter(n => n > 0); // Вилучаємо нулі
        return nums.length === new Set(nums).size && nums.length === 9;
    };

    // Перевірка рядків
    for (let row of board) {
        if (!isValid(row)) return false;
    }

    // Перевірка стовпців
    for (let col = 0; col < 9; col++) {
        const column = board.map(row => row[col]);
        if (!isValid(column)) return false;
    }

    // Перевірка блоків 3х3
    for (let blockRow = 0; blockRow < 3; blockRow++) {
        for (let blockCol = 0; blockCol < 3; blockCol++) {
            const block = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    block.push(board[blockRow * 3 + i][blockCol * 3 + j]);
                }
            }
            if (!isValid(block)) return false;
        }
    }

    return true;
}

const board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(validSolution(board)); // true
