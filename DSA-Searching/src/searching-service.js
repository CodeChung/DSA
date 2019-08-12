const searchingService = {
    convertToArray(string) {
        return string.split(' ')
    },

    linearSearchTicks(array, value) {
        let ticks = 0;
        for (let i = 0; i < array.length; i++) {
            ticks++
            if (array[i] === value) {
                return ticks;
            }
        }
        return "Value not found";
    },

    binarySearchTicks(array, value, start, end, ticks) {

        ticks = ticks === undefined ? 0 : ticks;
        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length : end;
    
        if (start > end) {
            return -1;
        }
    
        const index = Math.floor((start + end) / 2);
        const item = array[index];
    
        if (item === value) {
            ticks++
            return ticks;
        }
        else if (item < value) {
            ticks++
            return searchingService.binarySearchTicks(array, value, index + 1, end, ticks);
        }
        else if (item > value) {
            ticks++
            return searchingService.binarySearchTicks(array, value, start, index - 1, ticks);
        }
    }
}

export default searchingService;