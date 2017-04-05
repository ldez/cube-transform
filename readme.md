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


- `oppositeAlgorithm(algorithm)`: Opposite algorithm.
- `reverseAlgorithm(algorithm)`: Reverse an algorithm.
- `rotateAlgorithm(algorithm, axe)`: Apply a rotation on an algorithm.

## TODO

- [ ] rotations de `S`, `M`, `E`
- [ ] gérer les rotations multiples (ex: x2 ou xy)
- [ ] gérer symétrie axiale
- [ ] r/Rw - r'/Rw' - u/Uw - u'/Uw'- ...
- [ ] gérer `[]`
