# ⏳ Time Complexity – Pre-Read Notes

Time complexity helps us analyze **how efficient an algorithm is** as input size grows.  
We measure **growth rate** (not real seconds) using asymptotic notations.

---

## 🔹 Level 1 – The Basics

### 1. What is Time Complexity?
It estimates algorithm running time using `O(...)` notation.

Example:
- Print "Hello" → **O(1)**
- Print numbers from 1 to `n` → **O(n)**

---

### 2. Loops
- One loop → **O(n)**
- Two nested loops → **O(n²)**
- k nested loops → **O(nᵏ)**

---

### 3. Constant Factors
We ignore constants because they don’t change growth:
- `3n` → O(n)
- `n/2` → O(n)

---

### 4. Multiple Phases
The slowest dominates:
- O(n) + O(n²) → O(n²)

---

### 5. Recursive Functions
- Fibonacci (two recursive calls) → **O(2ⁿ)**
- Merge Sort → **O(n log n)**

---

### 6. Common Complexities (Fast → Slow)
- **O(1)** → constant (array access)
- **O(log n)** → logarithmic (binary search)
- **O(√n)** → square root
- **O(n)** → linear (loop over array)
- **O(n log n)** → sorting (merge sort, quicksort avg.)
- **O(n²)** → quadratic (bubble sort, two loops)
- **O(n³)** → cubic (three nested loops)
- **O(2ⁿ)** → exponential (subsets)
- **O(n!)** → factorial (permutations)

👉 Rule of thumb:
- `n ≤ 10³` → O(n²) is okay
- `n ≤ 10⁵` → O(n) or O(n log n)

---

## 🔹 Level 2 – Divide & Conquer + Recurrences

### Divide & Conquer
Steps:
1. **Divide** problem into smaller subproblems.
2. **Conquer** solve them recursively.
3. **Combine** merge results.

Example: Merge Sort  
`T(n) = 2T(n/2) + O(n)` → **O(n log n)**

---

### Solving Recurrences
1. **Recursion Tree Method** → expand tree, sum levels.
2. **Master Theorem** → quick formula for recurrences like:  
   `T(n) = aT(n/b) + f(n)`.

---

## 🔹 Level 3 – Asymptotic Notations

- **Θ (Theta):** exact/tight bound.  
  Example: Bubble Sort = Θ(n²)

- **O (Big O):** upper bound.  
  Example: Bubble Sort = O(n²)

- **Ω (Omega):** lower bound.  
  Example: Bubble Sort = Ω(n)

- **o (little o):** strictly smaller.  
  Example: f(n) = o(n²) → grows slower than n²

- **ω (little omega):** strictly larger.  
  Example: f(n) = ω(n) → grows faster than n

---

# Asymptotic Notations in Detail: Θ, O, Ω, o, ω

We compare two non-negative functions of input size, `f(n)` (your algorithm’s cost) and `g(n)` (a reference growth rate).

> Tip: Read “eventually” as “for all sufficiently large `n`”.

---

## 1) Big-Theta: **Θ(g(n))** — *Tight bound*

**Intuition:** `f` grows at the **same rate** as `g` (within constant factors).  
**Meaning:** `g` is both an upper and a lower bound on `f`.

**Formal definition:**  
`f(n) = Θ(g(n))` if ∃ constants `c1, c2 > 0` and `n0` such that  
`c1·g(n) ≤ f(n) ≤ c2·g(n)` for all `n ≥ n0`.

**Examples:**
- `f(n) = 3n + 7` is `Θ(n)`. (Choose `c1=1`, `c2=4`, for large `n`.)
- `f(n) = n^2 + 100n` is `Θ(n^2)`.

**How to prove Θ:**
1. Prove `f(n) = O(g(n))` (upper bound).
2. Prove `f(n) = Ω(g(n))` (lower bound).
If both hold, you have `Θ(g(n))`.

---

## 2) Big-Oh: **O(g(n))** — *Asymptotic upper bound*

**Intuition:** `f` never grows **faster** than a constant multiple of `g`, eventually.

**Formal definition:**  
`f(n) = O(g(n))` if ∃ constants `c > 0` and `n0` such that  
`f(n) ≤ c·g(n)` for all `n ≥ n0`.

**Examples:**
- `3n + 7 = O(n)` (take `c=4`, `n0=7`).
- `n log n = O(n^1.1)` (since `log n = o(n^0.1)`).
- Bubble sort (worst-case) time `n^2` ⇒ `T(n) = O(n^2)`.

**Limit test (handy):**  
If `limsup_{n→∞} f(n)/g(n) < ∞`, then `f(n) = O(g(n))`.

**Common pitfall:** Writing `f(n) = O(n)` as equality. It’s set membership: better is `f(n) ∈ O(n)` (but CS uses `=` informally).

---

## 3) Big-Omega: **Ω(g(n))** — *Asymptotic lower bound*

**Intuition:** `f` never grows **slower** than a constant multiple of `g`, eventually.

**Formal definition:**  
`f(n) = Ω(g(n))` if ∃ constants `c > 0` and `n0` such that  
`f(n) ≥ c·g(n)` for all `n ≥ n0`.

**Examples:**
- `3n + 7 = Ω(n)` (take `c=3/2`, for large `n`).
- Any algorithm that must read all `n` items has `Ω(n)` time.

**Limit test:**  
If `liminf_{n→∞} f(n)/g(n) > 0`, then `f(n) = Ω(g(n))`.

---

## 4) Little-oh: **o(g(n))** — *Strictly smaller order*

**Intuition:** `f` grows **strictly slower** than `g` (no constant multiple of `g` can upper-bound `f` tightly).

**Formal definition:**  
`f(n) = o(g(n))` if for **every** `c > 0` ∃ `n0` such that  
`f(n) ≤ c·g(n)` for all `n ≥ n0`.  
Equivalent: `lim_{n→∞} f(n)/g(n) = 0`.

**Examples:**
- `log n = o(n^ε)` for any `ε > 0`.
- `n = o(n log n)` (ratio `1/log n → 0`).
- `n^2 = o(n^2 log n)`.

**Counterexample:**  
`3n + 7` is **not** `o(n)` because `(3n+7)/n → 3 ≠ 0`.

---

## 5) Little-omega: **ω(g(n))** — *Strictly larger order*

**Intuition:** `f` grows **strictly faster** than `g`.

**Formal definition:**  
`f(n) = ω(g(n))` if for **every** `c > 0` ∃ `n0` such that  
`f(n) ≥ c·g(n)` for all `n ≥ n0`.  
Equivalent: `lim_{n→∞} f(n)/g(n) = ∞`.

**Examples:**
- `n = ω(log n)`.
- `n^1.001 = ω(n)`? **No** (ratio → ∞ would be needed). Instead, `n^1.001 = ω(n^1)` is true (ratio `n^0.001 → ∞`).
- `2^n = ω(n^k)` for any fixed `k`.

---

## Relationships & Quick Facts

- **Set relations:**  
  `Θ(g) = O(g) ∩ Ω(g)`  
  `o(g) ⊂ O(g)` and `ω(g) ⊂ Ω(g)` (strict subsets).

- **Limits summary:**  
  - `f = Θ(g)` ⇔ `f/g → c` with `0 < c < ∞`.  
  - `f = O(g)` ⇔ `limsup f/g < ∞`.  
  - `f = Ω(g)` ⇔ `liminf f/g > 0`.  
  - `f = o(g)` ⇔ `f/g → 0`.  
  - `f = ω(g)` ⇔ `f/g → ∞`.

- **Max rule (very useful):**  
  `f(n) + g(n) = Θ(max{f(n), g(n)})`.

- **Product rule:**  
  If `f ∈ O(h)` and `g ∈ O(k)`, then `f·g ∈ O(h·k)` (similarly for Ω, Θ under positivity).

- **Scaling:**  
  Multiplying by positive constants doesn’t change the class:  
  `c·f(n) ∈ Θ(f(n))` for `c > 0`.

- **Monotone comparison:**  
  If `g1(n) ≤ c·g2(n)` eventually, then `O(g1) ⊆ O(g2)`.

---

## Worked Micro-Proofs

**A) Show `3n + 7 = Θ(n)`**
- Upper bound: for `n ≥ 7`, `3n + 7 ≤ 3n + n = 4n` ⇒ `O(n)`.
- Lower bound: for all `n ≥ 1`, `3n + 7 ≥ 3n ≥ (3/4)·4n` ⇒ `Ω(n)`.
- Both hold ⇒ `Θ(n)`.

**B) Show `n log n = o(n^{1+ε})` (any `ε>0`)**
- `(n log n) / n^{1+ε} = (log n) / n^{ε} → 0` (polynomial beats log).  
- Limit 0 ⇒ little-oh.

**C) Show `n^2 + 100n = o(n^2 log n)`**
- `(n^2 + 100n) / (n^2 log n) = 1/log n + 100/(n log n) → 0`.  
- Hence `o(n^2 log n)`.

**D) Show `2^n = ω(n^k)` for any fixed `k`**
- `(2^n) / (n^k) → ∞` (exponential beats polynomial).  
- Hence `ω(n^k)`.

---

## Choosing the Right Notation

- Want a **tight, precise** growth rate? Use **Θ**.  
- Only know an **upper bound** (e.g., worst case)? Use **O**.  
- Only know a **lower bound** (e.g., input must be read)? Use **Ω**.  
- Want to say **strictly slower**? Use **o**.  
- Want to say **strictly faster**? Use **ω**.

---

## Common Pitfalls

- **Confusing O with Θ:**  
  Saying `T(n) = O(n^2)` doesn’t mean it’s *exactly* `n^2`; it could be `n log n`. `Θ` is the tight claim.

- **Ignoring sign restrictions:**  
  These are for **non-negative** functions eventually. If your function can be negative, compare absolute values or ensure eventual positivity.

- **Mixing average/worst/best case:**  
  Notation is about **bounds**; you still need to specify which case (best/avg/worst) you’re bounding.

---

## Quick Growth Ladder (from slower to faster)

`1 ≺ log n ≺ n^α ≺ n^α log^k n ≺ n^β (α<β) ≺ c^n (c>1) ≺ n!`

Use this to quickly decide `o/ω/Θ` relationships.

---

## Tiny Practice (answers by limit or constants)

1. Is `n^1.5` in `o(n^1.6)`?  
2. Is `n log n` in `ω(n)`?  
3. Is `log^2 n` in `Θ(log n)`?  
4. Is `n^2` in `O(n^2 / log n)`?  
5. Is `n / log n` in `o(n^0.9)`?



---

## 🔹 NP-Complete Problems

- Special class of very **hard problems**.  
- If one NP-complete problem is solved in polynomial time, **all can be solved**.  
- Example: Subset Sum, Travelling Salesman.  
- In practice → no efficient solution known.

---

## 🔹 Importance of Constants

Asymptotic complexity hides constants, but in practice:
- Big constants can slow O(n).
- Small constants can speed up O(n log n).

**Optimizations:**
- Precompute values
- Avoid repeated loops
- Pass by reference
- Reuse memory

---

## 📝 Quick Reference Table

| Complexity | Name           | Example                     |
|------------|---------------|-----------------------------|
| O(1)       | Constant      | Access array element        |
| O(log n)   | Logarithmic   | Binary Search               |
| O(√n)      | Root          | Trial division for primes   |
| O(n)       | Linear        | Loop through array          |
| O(n log n) | Log-linear    | Merge Sort, QuickSort (avg) |
| O(n²)      | Quadratic     | Bubble Sort, Matrix mult    |
| O(n³)      | Cubic         | 3D matrix ops               |
| O(2ⁿ)      | Exponential   | Subsets, recursion-heavy    |
| O(n!)      | Factorial     | Permutations, Travelling Salesman |

---
✅ **Flow for Learning:**
1. Basics (O(1) … O(n!))
2. Recursion + Divide & Conquer
3. Notations (O, Θ, Ω, o, ω)
4. NP-complete awareness
5. Apply based on input constraints
