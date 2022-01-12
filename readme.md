
# [Permutation PRNG](https://preshing.com/20121224/how-to-generate-a-sequence-of-unique-random-integers/)

```js
const E = 3132343537383103113163n
const A = 975319753197531975319n
const O = 541613713n
const U = 32 ** 15

let i = 0
while (i < U) {
  const x = generate(i, E, A, O, U)
  console.log(x)
  i++
}
```

- E, A, and O must be primes smaller than U, with E the largest, A the second largest, and O relatively small.
- U can be any bigint.
- All numbers must be bigint.
- `i` is an incrementing bigint
