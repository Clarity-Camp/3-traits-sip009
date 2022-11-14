
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.31.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "A user can mint one NFT",
    async fn(chain: Chain, accounts: Map<string, Account>) {

        const deployer = accounts.get('deployer')!.address;
        const user1 = accounts.get('wallet_1')!.address;

        let block = chain.mineBlock([
            Tx.contractCall(
                'my-nft',
                'mint',
                [],
                user1
            )
        ]);
        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
        assertEquals(block.receipts[0].events[0].stx_transfer_event.recipient, deployer)
        assertEquals(block.receipts[0].events[0].stx_transfer_event.amount, "5000000")
        assertEquals(block.receipts[0].events[1].nft_mint_event.recipient, user1)
        assertEquals(block.receipts[0].events[1].nft_mint_event.value, "u1")

        const nftMinted = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(1)],
            deployer
        )
        assertEquals(nftMinted.result, types.ok(types.some(user1)));
    },
});

Clarinet.test({
    name: "A user can transfer their NFT",
    async fn(chain: Chain, accounts: Map<string, Account>) {

        const deployer = accounts.get('deployer')!.address;
        const user1 = accounts.get('wallet_1')!.address;
        const user2 = accounts.get('wallet_2')!.address;

        let block = chain.mineBlock([
            Tx.contractCall(
                'my-nft',
                'mint',
                [],
                user1
            ),
            Tx.contractCall( 
                'my-nft',
                'transfer',
                [types.uint(1), types.principal(user1), types.principal(user2)],
                user1
            )
        ]);
        assertEquals(block.receipts.length, 2);
        assertEquals(block.height, 2);
        assertEquals(block.receipts[0].events[0].stx_transfer_event.recipient, deployer)
        assertEquals(block.receipts[0].events[0].stx_transfer_event.amount, "5000000")
        assertEquals(block.receipts[0].events[1].nft_mint_event.recipient, user1)
        assertEquals(block.receipts[0].events[1].nft_mint_event.value, "u1")
        assertEquals(block.receipts[1].events[0].nft_transfer_event.sender, user1)
        assertEquals(block.receipts[1].events[0].nft_transfer_event.recipient, user2)
        assertEquals(block.receipts[1].events[0].nft_transfer_event.value, "u1")
    },
});

Clarinet.test({
    name: "A user cannot transfer someone else's NFT",
    async fn(chain: Chain, accounts: Map<string, Account>) {

        const deployer = accounts.get('deployer')!.address;
        const user1 = accounts.get('wallet_1')!.address;
        const user2 = accounts.get('wallet_2')!.address;

        let block = chain.mineBlock([
            Tx.contractCall(
                'my-nft',
                'mint',
                [],
                user1
            ),
            Tx.contractCall( 
                'my-nft',
                'transfer',
                [types.uint(1), types.principal(user1), types.principal(user2)],
                user2
            )
        ]);
        assertEquals(block.receipts.length, 2);
        assertEquals(block.height, 2);
        assertEquals(block.receipts[0].events[0].stx_transfer_event.recipient, deployer)
        assertEquals(block.receipts[0].events[0].stx_transfer_event.amount, "5000000")
        assertEquals(block.receipts[0].events[1].nft_mint_event.recipient, user1)
        assertEquals(block.receipts[0].events[1].nft_mint_event.value, "u1")
        assertEquals(block.receipts[1].result, "(err u101)")
    },
});

Clarinet.test({
    name: "A user can mint five NFTs",
    async fn(chain: Chain, accounts: Map<string, Account>) {

        const deployer = accounts.get('deployer')!.address;
        const user1 = accounts.get('wallet_1')!.address;

        let block = chain.mineBlock([
            Tx.contractCall(
                'my-nft',
                'mint-five',
                [],
                user1
            )
        ]);
        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
        assertEquals(block.receipts[0].events[0].stx_transfer_event.recipient, deployer)
        assertEquals(block.receipts[0].events[0].stx_transfer_event.amount, "5000000")
        assertEquals(block.receipts[0].events[1].nft_mint_event.recipient, user1)
        assertEquals(block.receipts[0].events[1].nft_mint_event.value, "u1")
        assertEquals(block.receipts[0].events[3].nft_mint_event.value, "u2")
        assertEquals(block.receipts[0].events[5].nft_mint_event.value, "u3")
        assertEquals(block.receipts[0].events[7].nft_mint_event.value, "u4")
        assertEquals(block.receipts[0].events[9].nft_mint_event.value, "u5")

        const nftMinted1 = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(1)],
            deployer
        )
        assertEquals(nftMinted1.result, types.ok(types.some(user1)));

        const nftMinted2 = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(2)],
            deployer
        )
        assertEquals(nftMinted2.result, types.ok(types.some(user1)));

        const nftMinted3 = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(3)],
            deployer
        )
        assertEquals(nftMinted3.result, types.ok(types.some(user1)));

        const nftMinted4 = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(4)],
            deployer
        )
        assertEquals(nftMinted4.result, types.ok(types.some(user1)));

        const nftMinted5 = chain.callReadOnlyFn(
            'my-nft',
            'get-owner',
            [types.uint(5)],
            deployer
        )
        assertEquals(nftMinted5.result, types.ok(types.some(user1)));
    },
});