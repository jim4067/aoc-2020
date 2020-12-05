
function num_two(arr) {
    let val1;
    let val2;
    let val3;
    // 
    let arr_len = arr.length;
    // 
    for (let index = 0; index <= arr_len; index++) {
        for (let in_index = 1; in_index <= arr_len; in_index++) {
            for (let in_in_index = 2; in_in_index <= arr_len; in_in_index++) {
                if (arr[index] + arr[in_index] + arr[in_in_index] === 2020) {
                    val1 = arr[index];
                    val2 = arr[in_index];
                    val3 = arr[in_in_index];
                    break;
                }
            }
        }
    }
    const result = val1 * val2 * val3;
    return result;
}
