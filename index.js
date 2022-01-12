
const permute = (x, o) => {
  if (x >= o) {
    return x
  } else {
    const v = (x * x) % o
    return (x <= (o / 2n)) ? v : o - v
  }
}

const generate = (v, w, s, x, m) => permute((permute(v, w) + s, w) % m ^ x)

module.exports = generate
