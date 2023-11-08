## Knapsack pack problem

Là 1 bài toán vô cùng nổi tiếng trong lập trình.

***Tôi là 1 kẻ trộm mang theo 1 balo với trọng tải N. Với 1 list các loại đồ tôi có thể trộm được có tải trọng riêng và giá trị riêng. Làm sao để tính toán được nên trộm những thứ gì sao cho giá trị tiền bạc lớn nhất mà vẫn cho đủ vào balo được???***

***input***

*limit: tải trọng của chiếc balo*

*data: list các vật phẩm có thể thu nhặt*

*vd:*
```
const lim = 5;
const data = [
    {
        name: 'guitar',
        price: 1500,
        weight: 1,
    },
    {
        name: 'stereo',
        price: 3000,
        weight: 4,
    },
    {
        name: 'laptop',
        price: 2000,
        weight: 3,
    },
    {
        name: 'iphone',
        price: 2000,
        weight: 1,
    },
];
```

***Với ví dụ trên ta có thể tính toán được ngay sẽ nên lấy guitar + laptop + iphone = 5500 price***

## Cách giải quyết bài toán
sử dụng phương pháp quy hoạch động (dynamic programming), ta giải quyết các bài toán bé hơn trước khi giải quyết bài toán lớn của mình.

1. ta tạo 1 mảng 2D để lưu tải thông tin từng tải trọng sẽ lấy tối đa bao nhiêu price.
2. từ việc giải quyết các bài toán từ tải trọng bé nhất (1) đến N ta sẽ lấy được giá trị cần tính.
3. độ phức tạp thuật toán Big O notation (limit * data.length)