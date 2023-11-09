## Sort algorithms

ở đây mình sẽ giới thiệu về 2 thuật toán sort phổ biến nhất là selection sort và quick sort. Thao tác trên mảng 1 chiều.

**Input**

1. array: mảng các số cần sắp xếp

*vd:*
```
const arr = [3, 4, 1, 2, 7];
```

### Selection sort  
Ta sẽ loop lần lượt các phần tử. Trong mỗi lần loop sẽ tìm phần tử bé nhất trừ phần tử đang xét.

Sau khi tìm được phần tử bé nhất sẽ tiến hành swap index giữa phần tử đang xét và phần tử bé nhất.

Cứ như vậy cho đến khi không còn phần tử để xét là sẽ có 1 mảng đã được sắp xếp.

```
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
```

độ phức tạp của thuật toán là O(n^2)

##
### Quick sort
Sử dụng phương pháp chia để trị (devide and conquer). 

Bài toán đơn giản nhất của việc sắp xếp là khi length array <= 1 (base case)

Ta sẽ lấy 1 phần tử trong mảng làm pivot. Tạo ra 2 mảng left (các phần tử bé hơn phần tử xét) và right (các phần tử lớn hơn phần tử xét). Sử dụng đệ quy với left, right. Cho đến khi chúng đưa về base case.


```
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)]
}
```
Độ phức tạp của thuật toán sẽ là O (n * log n)