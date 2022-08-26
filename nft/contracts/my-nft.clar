
;; my-nft

;; IMPLEMENT TRAIT HERE

;; DEFINE NON-FUNGIBLE-TOKEN HERE

(define-constant MINT_PRICE u1000000)
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_OWNER_ONLY (err u100))
(define-constant ERR_NOT_TOKEN_OWNER (err u101))

(define-data-var last-token-id uint u0)

;; WRITE get-last-token-id FUNCTION HERE

(define-read-only (get-token-uri (id uint)) 
  (ok none)
)

(define-read-only (get-owner (id uint))
  ;; COMPLETE THIS FUNCTION HERE
)

;; WRITE transfer FUNCTION HERE

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

;; WRITE mint-five FUNCTION HERE
