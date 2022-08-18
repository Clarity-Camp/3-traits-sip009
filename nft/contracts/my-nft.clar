
;; my-nft

;; IMPLEMENT TRAIT HERE

(define-constant MINT_PRICE u100)
(define-constant WALLET_1 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

;; DEFINE NON-FUNGIBLE-TOKEN HERE

(define-data-var last-token-id uint u0)

;; WRITE GET-LAST-TOKEN-ID FUNCTION HERE

(define-read-only (get-token-uri (id uint)) 
  (ok none)
)

(define-read-only (get-owner (id uint))
  ;; COMPLETE THIS FUNCTION HERE
)

;; WRITE TRANSFER FUNCTION HERE

(define-public (mint (recipient principal))
  (let 
    (
      (id (+ (var-get last-token-id) u1))
    )
    ;; COMPLETE THIS FUNCTION HERE
    (var-set last-token-id id)
    (ok id)
  )
)