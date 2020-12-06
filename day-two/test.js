//this is not important

const { createReadStream } = require('fs');

let data = '';

const read_stream = createReadStream('ex-input.txt', 'utf8');

read_stream.on('data', (chunk) => {
    data += chunk;
}).on("end", () => {
    const arr = data.split('\n');

    const val = arr[0];

    const split_one = val.split(':');
    const split_two = split_one[0].split(' ');
    const required_letter = split_two[1];
    // const final_split = split_two[0].split('-');

    // const limit_one = final_split[0];
    // const limit_two = final_split[1];
    const password = split_one[1].substring(1);

    const password_split = password.split('');

    //here you get the number of times the character appers
    //in the password and in the if statement check whether it
    //goes below or above
    // let letter_count = 0;
    // password_split.map((letter) => letter.includes(required_letter) ? letter_count += 1 : null);
    // console.log(letter_count)

    //    console.log(password.split(''))

    console.log(correct_password(arr));

})

function correct_password(arr) {
    //counter counts the number of correct passwords
    let counter = 0;

    const arr_len = arr.length;

    for (let index = 0; index < arr_len; index++) {

        const val = arr[index];

        const split_one = val.split(':');
        const split_two = split_one[0].split(' ');
        const final_split = split_two[0].split('-');

        const limit_one = final_split[0];
        const limit_two = final_split[1];
        const required_letter = split_two[1];
        const password = split_one[1].substring(1);

        //here you get the number of times the character appers
        //in the password and in the if statement check whether it
        //goes below or above
        let letter_count = 0;
        password.split('').map((letter) => letter.includes(required_letter) ? letter_count += 1 : null);
        

        //count the number of strings in the password and work 
        //from there

        // if (arr[index] === 'two') {
        //     counter += 1;
        // }
       if(letter_count >= limit_one && letter_count <= limit_two){
           counter+=1;
       }
    }


    return counter;
}


//first split the arr to get the limits 
//then check if they are correct and add the counter to see 
//which ones are correct
