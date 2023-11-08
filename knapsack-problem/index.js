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

function knapsack(data, lim) {
    const dp = new Array(data.length).fill().map(() => new Array(lim).fill(0));

    data.forEach((el, index) => {
       for (let capacity = 1; capacity <= lim; capacity++) {
           if (index === 0) {
               dp[index][capacity - 1] = el.price;
               continue;
           }
           if (el.weight > capacity) {
               // keep old value
               dp[index][capacity - 1] = dp[index - 1][capacity - 1];
               continue;
           }
           const prev = dp[index - 1][capacity - 1];
           const sum = (el.weight === capacity ? 0 : dp[index - 1][capacity - el.weight - 1]) + el.price;
           dp[index][capacity - 1] = Math.max(prev, sum);
       }
    });

    return dp[data.length - 1][lim - 1];
}

const optimalValue = knapsack(data, lim);

console.log(`Tổng giá trị tối ưu có thể đóng gói: ${optimalValue}`);