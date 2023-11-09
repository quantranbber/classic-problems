const arr = [3, 4, 1, 2, 7];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            // swap
            let tmp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = tmp;
        }
    }

    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(selectionSort(arr));
console.log(quickSort(arr));