## Clarity Camp SIP-009 Assignment

You've learned what a `SIP` is as well as the specifics of `SIP-009` for NFT standards. <br>
Now it's time to create your own NFT contract!

### Learning Goals

- use `define-trait` to define `SIP-009`
- use `impl-trait` to implement the trait in your main contract
- use `define-non-fungible-token` and write some basic functions for an NFT project

### Tasks

- `sip-009-trait.clar` has been created for you and the `SIP-009` standard has been added as a comment.
  - define the trait correctly

- `my-nft.clar` has been created for you and some of the code has been written.
  - implement the trait correctly
  - define your non-fungible-token (you can name it whatever you'd like)
  - write `get-last-token-id` function. *Hint: This function just grabs the value of `last-token-id` which has been defined for you.*
  - complete `get-owner` function. *Hint: This function just grabs the owner of a specified NFT. (NFTs have ids)*
  - write `transfer` function. *Hint: This function transfers an asset between a sender and a receiver.*
  - complete `mint` function. *Hint: Think about what needs to happen for an NFT to be minted. Is there payment involved? Are there any built-in functions that may be useful?*