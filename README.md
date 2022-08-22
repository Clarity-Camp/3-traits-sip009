# Clarity Camp SIP-009 Assignment

You've learned what a `SIP` is as well as the specifics of `SIP-009` for NFT standards. <br>
Now it's time to create your own NFT contract! :bowtie:

## Learning Goals :bulb:

- use `define-trait` to define `SIP-009`
- use `impl-trait` to implement the trait in your main contract
- use `define-non-fungible-token` and write some basic functions for an NFT project

## Tasks :white_check_mark:

`sip-009-trait.clar` has been created for you and the `SIP-009` standard has been added as a comment.<br><br>

- [ ] uncomment the function definitions and define the trait

---

`my-nft.clar` has been created for you and some of the code has been written. You will write your code in this file.<br><br>

- [ ] implement the trait you defined in `sip-009-trait.clar`

---

- [ ] define a `non-fungible-token`<br>
*Hint: You can name it whatever you'd like.*

---

As a user, I should be able to see the id of the last minted NFT.
- [ ] Write a function called `get-last-token-id` that takes no parameters and retrieves the value of `last-token-id`.

---

As a user, I should be able to see the principal that owns an NFT with a specific ID.
- [ ] Complete the `get-owner` function that retrieves the owners of a specified NFT.

---

As a user, I should be able to transfer an NFT that I own to another account.
- [ ] Write a function called `transfer` function that takes three parameters, the id of the asset you are transfering, the principal sending the asset, and the principal recieving the asset.<br>

---
 
 As a user, I should be able to transfer STX in exhange for a newly minted NFT.
 - [ ] Complete the `mint` function.<br>
 *Hint: Think about what needs to happen for an NFT to be minted. Are there any built-in functions that may be useful?*
