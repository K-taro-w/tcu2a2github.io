document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const numberElement = document.getElementById('number');
    const endMessageElement = document.getElementById('end-message');

    const zNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 18, 19, 22, 23, 24, 25, 28, 29, 30, 31, 32];
    const xNumbers = [17, 20, 21, 26, 27];
    const cNumbers = [11, 12];
    let totalCount = 0;

    document.addEventListener('keydown', (event) => {
        let number;
        if (event.key === 'z' && zNumbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * zNumbers.length);
            number = zNumbers.splice(randomIndex, 1)[0];
        } else if (event.key === 'x' && xNumbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * xNumbers.length);
            number = xNumbers.splice(randomIndex, 1)[0];
        } else if (event.key === 'c' && cNumbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * cNumbers.length);
            number = cNumbers.splice(randomIndex, 1)[0];
        }

        if (number !== undefined) {
            numberElement.textContent = number;
            totalCount++;

            if (totalCount === 32) {
                endMessageElement.textContent = '終了';
                messageElement.textContent = '';
            }
        }
    });
});
