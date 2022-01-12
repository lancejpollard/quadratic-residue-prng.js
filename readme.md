
# [Quadratic Residue PRNG](https://preshing.com/20121224/how-to-generate-a-sequence-of-unique-random-integers/)

```js
const permute = require('@lancejpollard/quadratic-residue-prng.js')

const E = 3132343537383103113163n
const A = 975319753197531975319n
const O = 541613713n
const U = 32 ** 15

let i = 0
while (i < U) {
  const x = permute(i, E, A, O, U)
  console.log(x)
  i++
}
```

- E, A, and O must be primes smaller than U, with E the largest, A the second largest, and O relatively small.
- E should probably be the largest prime that is less than U.
- U can be any bigint.
- All numbers must be bigint.
- `i` is an incrementing bigint

Go to a site like [curios primes](https://primes.utm.edu/curios/index.php?start=8&stop=9) to select some primes based on your `U` (max). Vary `A` between sequences to create highly different sequences out of the incrementing sequence.

So for example, you want to generate 3 sets of pseudo random IDs, you're going to need 3 different sequences (output), but can use the same range of input sequences (0 to max U). Pick a unique `A` for each sequence, but fix E, O, and U. Then when you input `i`, you will get different values for each sequence at index `i`. Sometimes you might want to change U to be a different max, to limit the range (and size) of possible values, as well. But if `U` is constant, to generate different sequences, vary `A` on a per-sequence basis.

The math behind this is pure magic. Whoever figured this out, please explain lol.
