## Search problem

ở đây mình sẽ giới thiệu về 2 thuật toán search phổ biến nhất là linear search và binary search. Thao tác trên mảng 1 chiều.

**Input**

1. array: mảng data cần tìm

2. value: giá trị cần tìm

*vd:*
```
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
```

### Linear search  
ta sẽ loop mảng và tìm tuần tự các element trong mảng cho đến khi thỏa mãn điều kiện cần tìm.

```
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].name === value) {
            return arr[index].price;
        }
    }
```

cách tìm này rất đơn giản

độ phức tạp của thuật toán là O(n)

##
### Binary search
*thuật toán này chỉ hoạt động đúng khi mảng đã được sắp xếp*

gán 1 index left = **index đầu mảng** và 1 index right = **index cuối của mảng**

ta lấy 1 index ngẫu nhiên (thường là index ở giữa mảng). Sau đó xét xem phần tử đó lớn hoặc bé hơn so với giá trị cần tìm.

Nếu lớn hơn hoặc bé hơn thì sẽ tiến hành loại bỏ các phần tử cần xét. Mỗi lần loại bỏ sẽ loại được 1 nửa số phần tử cần tìm.

VD: 
- với 6 phần tử thì sẽ cần tối đa 2 bước
- với 100 phần tử sẽ cần tối đa 7 bước

Do đó độ phức tạp của thuật toán sẽ là O (log N)


```
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
```
