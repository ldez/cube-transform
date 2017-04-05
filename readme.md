# Cube Transformer

Parse cube's algorithm and apply a transformation.

Support 3x3x3 moves:

* `U` `D` - `u` `d`
* `R` `L` - `r` `l`
* `F` `B` - `f` `b`
* `S`
* `M`
* `E`
* `x` `y` `z`

## API

- `const result = cubeTranform.oppositeAlgorithm(algorithm);`: Opposite algorithm.
- `const result = cubeTranform.reverseAlgorithm(algorithm);`: Reverse an algorithm.
- `const result = cubeTranform.rotateAlgorithm(algorithm, axe);`: Apply a rotation on an algorithm.

## TODO

- [ ] rotations de `S`, `M`, `E`
- [ ] gérer les rotations multiples (ex: x2 ou xy)
- [ ] gérer symétrie axiale
- [ ] r/Rw - r'/Rw' - u/Uw - u'/Uw'- ...
- [ ] gérer `[]`
