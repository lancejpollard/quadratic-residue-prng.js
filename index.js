
const rotate = (x, o) => {
  if (x >= o) {
    return x
  } else {
    const v = (x * x) % o
    return (x <= (o / 2n)) ? v : o - v
  }
}

const permute = (v, w, s, x, m) => rotate((rotate(v, w) + s) % m ^ x, w)

module.exports = permute
