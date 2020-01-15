# Uniform Random Number

[![CircleCI](https://circleci.com/gh/pooltogether/uniform-random-number.svg?style=svg)](https://circleci.com/gh/pooltogether/uniform-random-number)

This Solidity library eliminates module bias when using a large number to select from a limited range of numbers.

For example:

- Assume the max unsigned integer is 5
- random() selects an integer between 0 and 5

We want to use the random number to select a value between 0 and 3.

selection = random() % 4

The above might do, until we realize that:

| random() | selection |
| ---------| --------- |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 0 |
| 5 | 1 |

Notice that 0 and 1 are overrepresented.  This is modulo bias, and is problematic when making *fair* selection algorithms.

This library mitigates modulo bias using an algorithm described in [this article](https://medium.com/hownetworks/dont-waste-cycles-with-modulo-bias-35b6fdafcf94).

# Installation

Add to your `package.json`:

```json
{
  "dependencies": {
    "@pooltogether/uniform-random-number": "pooltogether/uniform-random-number#master"
  }
}
```

# Usage

```solidity
import "pooltogether/uniform-random-number/contracts/UniformRandomNumber.sol";

// ...

uint256 randomNumber = uint256(keccak('Hello'));
uint256 upperLimit = 10;
UniformRandomNumber.uniform(randomNumber, upperLimit);
```

# Audit

This code has been audited by [OpenZeppelin](https://openzeppelin.com/) and [Quantstamp](https://quantstamp.com/) as part of the [PoolTogether codebase](https://github.com/pooltogether/pooltogether-contracts).