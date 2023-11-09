// sorted data
const data = [
    {
        name: 'guitar',
        price: 1500,
    },
    {
        name: 'iphone',
        price: 2000,
    },
    {
        name: 'laptop',
        price: 2000,
    },
    {
        name: 'stereo',
        price: 3000,
    },
];

const value = 'laptop';

function linearSearch(arr, value) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === value) {
            return arr[index].price;
        }
    }
}

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const guessIndex = left + Math.floor((right - left) / 2);
        const guess = arr[guessIndex];
        if (guess.name === value) {
            return guess.price;
        }
        if (guess.name > value) {
            right = guessIndex - 1;
        } else {
            left = guessIndex + 1;
        }
    }
}

console.log('[linear search] price of laptop: ', linearSearch(data, value));
console.log('[binary search] price of laptop: ', binarySearch(data, value));