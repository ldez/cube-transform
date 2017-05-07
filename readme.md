# Cube Transformer

[![Build Status](https://travis-ci.org/ldez/cube-transform.svg?branch=master)](https://travis-ci.org/ldez/cube-transform)

Parse cube's algorithm and apply a transformation.

Support 3x3x3 moves:

* `U` `D` - `u` `d`
* `R` `L` - `r` `l`
* `F` `B` - `f` `b`
* `S`, `M`, `E`
* `x` `y` `z`
* support group `()` (example: `(RU'R'U)LD'FB`)
* support repetition (example: `R2U3` or `(RU'R'U)2`)

## API

See [documentation](https://ldez.github.io/cube-transform/)

## TODO

- [ ] rotation of `S`, `M`, `E`
- [ ] multiple rotations (`x2` or `xy`)
- [ ] manage axial symmetry
- [ ] `r/Rw` - `r'/Rw'` - `u/Uw` - `u'/Uw'`- ...
- [ ] manage `[]`
