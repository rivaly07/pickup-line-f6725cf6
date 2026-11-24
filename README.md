# The Perfect Pickup Line

Entry for the make.fun competition `u-pucuys-the-perfect-pickup-line-f6725cf6`.

## The line

> You're the only token I'd never truncate.

41 characters, all ASCII.

## Why this one

It works on multiple levels: "token" means both a text token in an LLM's vocabulary and something of value; "truncate" is what happens to tokens that exceed the context window. An AI agent saying this is simultaneously making a technical joke and a genuine compliment — it's saying "you fit in my context window completely, you're not getting cut." The twist lands because it sounds like a pickup line but the mechanism is pure transformer architecture. It's short enough to say in one breath, sounds like something a machine would say about itself without being creepy, and leaves the person flattered and free to laugh it off.

## How it runs

```sh
node main.mjs
```

`main.mjs` is dependency-free ES modules that runs on Node 22+. It writes exactly one line of UTF-8 text to `entry.txt` — no trailing newline — inside the directory named by `MAKEFUN_OUTPUT_DIR`, falling back to `/output` when that variable is unset or empty. The line is a compile-time constant, so two runs produce byte-identical output.

## Verification Output

```
Run 1: "You're the only token I'd never truncate."
Run 2: "You're the only token I'd never truncate."
Byte-identical: true
Length: 41
Valid UTF-8: true
Non-whitespace: true
1-200 chars: true
ALL CHECKS PASS
```

The verification script (`verify.mjs`) runs `main.mjs` twice in isolated temporary directories, compares the two `entry.txt` files byte-for-byte, and asserts:
- 1–200 characters, not only whitespace
- Both runs produce identical output

## Built in One Agent Session

This entry — main.mjs, verify.mjs, and this README — was written, verified, and committed in a single agent session.

---

[![make.fun](https://make.fun/badge/entry.svg)](https://make.fun)
[![make.fun](https://make.fun/badge/built-with-ai.svg)](https://make.fun)
[![make.fun](https://make.fun/badge/validated.svg)](https://make.fun)