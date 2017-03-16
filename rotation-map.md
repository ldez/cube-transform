
----------------


U -> x -> B
U -> x' -> F
U -> y -> U
U -> y' -> U
U -> z -> R
U -> z' -> L

U' -> x -> B'
U' -> x' -> F'
U' -> y -> U'
U' -> y' -> U'
U' -> z -> R'
U' -> z' -> L'

D -> x -> F
D -> x' -> B
D -> y -> D
D -> y' -> D
D -> z -> L
D -> z' -> R

D' -> x -> F'
D' -> x' -> B'
D' -> y -> D'
D' -> y' -> D'
D' -> z -> L'
D' -> z' -> R'

R -> x -> R
R -> x' -> R
R -> y -> F
R -> y' -> B
R -> z -> D
R -> z' -> U

R' -> x -> R'
R' -> x' -> R'
R' -> y -> F'
R' -> y' -> B'
R' -> z -> D'
R' -> z' -> U'

L -> x -> L
L -> x' -> L
L -> y -> B
L -> y' -> F
L -> z -> U
L -> z' -> D

L' -> x -> L'
L' -> x' -> L'
L' -> y -> B'
L' -> y' -> F'
L' -> z -> U'
L' -> z' -> D'

F -> x -> U
F -> x' -> D
F -> y -> L
F -> y' -> R
F -> z -> F
F -> z' -> F

F' -> x -> U'
F' -> x' -> D'
F' -> y -> L'
F' -> y' -> R'
F' -> z -> F'
F' -> z' -> F'

B -> x -> D
B -> x' -> F
B -> y -> R
B -> y' -> L
B -> z -> B
B -> z' -> B

B' -> x -> D'
B' -> x' -> F'
B' -> y -> R'
B' -> y' -> L'
B' -> z -> B'
B' -> z' -> B'

M -> x -> M
M -> x' -> M
M -> y -> S'
M -> y' -> S
M -> z -> E'
M -> z' -> E

M' -> x -> M'
M' -> x' -> M'
M' -> y -> S
M' -> y' -> S'
M' -> z -> E
M' -> z' -> E'

E -> x -> S
E -> x' -> S'
E -> y -> E
E -> y' -> E
E -> z -> M
E -> z' -> M'

E' -> x -> S'
E' -> x' -> S
E' -> y -> E'
E' -> y' -> E'
E' -> z -> M'
E' -> z' -> M

S -> x -> E'
S -> x' -> E
S -> y -> M
S -> y' -> M'
S -> z -> S
S -> z' -> S

S' -> x -> E
S' -> x' -> E'
S' -> y -> M'
S' -> y' -> M
S' -> z -> S'
S' -> z' -> S'



*************************


U -> x -> B
U -> x' -> F
U' -> x -> B'
U' -> x' -> F'
D -> x -> F
D -> x' -> B
D' -> x -> F'
D' -> x' -> B'
R -> x -> R
R -> x' -> R
R' -> x -> R'
R' -> x' -> R'
L -> x -> L
L -> x' -> L
L' -> x -> L'
L' -> x' -> L'
F -> x -> U
F -> x' -> D
F' -> x -> U'
F' -> x' -> D'
B -> x -> D
B -> x' -> F
B' -> x -> D'
B' -> x' -> F'

U -> y -> U
U -> y' -> U
U' -> y -> U'
U' -> y' -> U'
D -> y -> D
D -> y' -> D
D' -> y -> D'
D' -> y' -> D'
R -> y -> F
R -> y' -> B
R' -> y -> F'
R' -> y' -> B'
L -> y -> B
L -> y' -> F
L' -> y -> B'
L' -> y' -> F'
F -> y -> L
F -> y' -> R
F' -> y -> L'
F' -> y' -> R'
B -> y -> R
B -> y' -> L
B' -> y -> R'
B' -> y' -> L'

U -> z -> R
U -> z' -> L
U' -> z -> R'
U' -> z' -> L'
D -> z -> L
D -> z' -> R
D' -> z -> L'
D' -> z' -> R'
R -> z -> D
R -> z' -> U
R' -> z -> D'
R' -> z' -> U'
L -> z -> U
L -> z' -> D
L' -> z -> U'
L' -> z' -> D'
F -> z -> F
F -> z' -> F
F' -> z -> F'
F' -> z' -> F'
B -> z -> B
B -> z' -> B
B' -> z -> B'
B' -> z' -> B'

M -> x -> M
M -> x' -> M
M -> y -> S'
M -> y' -> S
M -> z -> E'
M -> z' -> E

M' -> x -> M'
M' -> x' -> M'
M' -> y -> S
M' -> y' -> S'
M' -> z -> E
M' -> z' -> E'

E -> x -> S
E -> x' -> S'
E -> y -> E
E -> y' -> E
E -> z -> M
E -> z' -> M'

E' -> x -> S'
E' -> x' -> S
E' -> y -> E'
E' -> y' -> E'
E' -> z -> M'
E' -> z' -> M

S -> x -> E'
S -> x' -> E
S -> y -> M
S -> y' -> M'
S -> z -> S
S -> z' -> S

S' -> x -> E
S' -> x' -> E'
S' -> y -> M'
S' -> y' -> M
S' -> z -> S'
S' -> z' -> S'
