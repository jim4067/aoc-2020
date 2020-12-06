//this is not important

const { createReadStream } = require('fs');

let data = '';

const read_stream = createReadStream('ex-input.txt', 'utf8');

read_stream.on('data', (chunk) => {
    data += chunk;
}).on("end", () => {
    const arr = data.split('\n');

    // const val = arr[0];

    // const split_one = val.split(':');
    // const split_two = split_one[0].split(' ');
    // const final_split = split_two[0].split('-');

    // //Each policy actually describes two positions in the password, 
    // // where 1 means the first character, 2 means the second character
    // //since array index begins at 0 should we add or subtract40

    // const limit_one = (final_split[0] - 1);
    // const limit_two = (final_split[1] - 1);
    // const required_letter = split_two[1];


    // const password = split_one[1].substring(1);

    // // console.log(password.split(''));
    // // console.log("limit one", limit_one, "limit two", limit_two, "and the password is",
    // //     password);

    // const letter_arr = password.split('');
    // console.log(letter_arr);
    // // let counter = 0;

    // // letter_arr.map((val, index) => {
    // //     index === limit_one && val.includes(required_letter) || index === limit_two && val.includes(required_letter)
    // //         ? counter += 1 : null;
    // // });
    // // console.log(counter);
    // if (letter_arr[limit_one] === required_letter || letter_arr[limit_one] === required_letter) {
    //     console.log("this is true");
    // }

    console.log(correct_password(arr));


}).on('error', (err) => {
    console.error("aaaw shit. here we go again", err.message);
});


function correct_password(arr) {
    //counter counts the number of correct passwords
    let counter = 0;

    const arr_len = arr.length;

    for (let index = 0; index < arr_len; index++) {

        const val = arr[index];

        const split_one = val.split(':');
        const split_two = split_one[0].split(' ');
        const final_split = split_two[0].split('-');

        const limit_one = (final_split[0] - 1);
        const limit_two = (final_split[1] - 1);
        const required_letter = split_two[1];
        const password = split_one[1].substring(1);

        const letter_arr = password.split('');

        if (letter_arr[limit_one] === required_letter || letter_arr[limit_one] === required_letter) {
            counter += 1;
        }
    }

    return counter;
}