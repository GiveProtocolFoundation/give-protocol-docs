---
title: Wallet & Transaction Troubleshooting
description: Solutions for wallet connection problems, failed crypto transactions, wrong network errors, and unconfirmed donations on Give Protocol.
permalink: /docs/troubleshooting/wallet-transactions/
---

# Wallet & Transaction Troubleshooting

This page covers issues with crypto wallets and blockchain transactions. For card payment problems, see [Donation Problems](/docs/troubleshooting/donation-problems/).

## Wallet Won't Connect

### Wallet not detected

- Make sure your wallet browser extension (MetaMask, Rabby, Coinbase Wallet, etc.) is **installed and unlocked**.
- Try refreshing the page.
- Check that the wallet extension is enabled in your browser's extensions settings.
- If you recently installed the wallet, you may need to restart your browser.

### Connection request doesn't appear

- Your wallet may already have a pending connection request. Open your wallet extension and check for any pending approvals.
- If using MetaMask, click the MetaMask icon in your browser toolbar — pending requests show as a notification badge.
- Try disconnecting from Give Protocol in your wallet's settings (Connected Sites), then reconnect.

### Multiple wallets installed

If you have several wallet extensions installed (for example, MetaMask and Phantom), they can sometimes interfere with each other. Give Protocol detects all installed wallets and lets you choose which one to connect. If you're having trouble:

1. Open the wallet connection modal on Give Protocol.
2. Select the specific wallet you want to use from the list.
3. If the wrong wallet keeps responding, try disabling the other wallet extensions temporarily.

### "User rejected the request"

This means you (or your wallet) declined the connection. Try again and click **Approve** or **Connect** when your wallet prompts you.

## Wrong Network

### "Wrong network" or tokens not showing

Your wallet is connected to a network that Give Protocol doesn't support, or a different network than the one selected in the donation modal.

**To switch networks:**

1. Give Protocol will prompt you to switch — click the prompt and approve the network switch in your wallet.
2. Or manually switch in your wallet: open MetaMask → click the network dropdown at the top → select the correct network (Base, Optimism, or Moonbeam).

### Network not available in my wallet

If the network isn't listed in your wallet, you need to add it:

1. Visit [chainlist.org](https://chainlist.org).
2. Search for the network name (e.g., "Base").
3. Click **Add to MetaMask** (or your wallet) and approve.

Alternatively, Give Protocol will prompt your wallet to add the network automatically when you select it in the donation modal.

### Supported networks

| Network | Chain ID | Native Token |
|---------|----------|-------------|
| Base | 8453 | ETH |
| Optimism | 10 | ETH |
| Moonbeam | 1284 | GLMR |

## Transaction Failed

### "Insufficient balance"

You don't have enough of the selected token to complete the donation. Check your balance in your wallet or in the token selector dropdown on Give Protocol.

Remember: you also need a small amount of the network's **native token** (ETH on Base/Optimism, GLMR on Moonbeam) to pay the gas fee, even if you're donating a different token like USDC.

### "Insufficient funds for gas"

You have enough of the donation token but not enough native token (ETH or GLMR) to pay the gas fee. Add a small amount of the native token to your wallet:

- On **Base** or **Optimism**: You need a tiny amount of ETH (as little as $0.05 worth).
- On **Moonbeam**: You need a tiny amount of GLMR.

You can purchase these on exchanges like Coinbase, Binance, or Kraken and transfer them to your wallet address.

### Token approval failed

Before your first donation of a specific token, your wallet needs to approve the Give Protocol smart contract to transfer that token. This approval transaction requires gas. If it fails:

1. Check that you have enough native token for gas.
2. Try again — temporary network congestion can cause failures.
3. If your wallet shows an error code, see the [error codes](#common-error-codes) section below.

### Transaction stuck or pending

Transactions on Layer 2 networks (Base, Optimism) usually confirm within seconds. If your transaction is stuck:

1. **Wait a few minutes.** Network congestion can occasionally slow confirmations.
2. **Check the block explorer.** Click the transaction link in your wallet to see its status on the network's block explorer.
3. **Do not submit the same transaction again** while one is pending — this can result in duplicate donations.

If a transaction has been pending for more than 10 minutes on Base or Optimism, it may have failed silently. Refresh Give Protocol and check your dashboard. If the donation doesn't appear and your balance wasn't deducted, you can try again.

## Unconfirmed or Missing Donations

### Donation processed but not in dashboard

- **Are you signed in?** Crypto donations are linked to your account only if you were signed in at the time.
- **Check the correct network.** Your dashboard shows donations across all networks, but make sure the transaction actually confirmed by checking the block explorer.
- **Wait a moment.** There can be a brief delay between on-chain confirmation and the donation appearing in your dashboard.

### Transaction confirmed on-chain but charity says they didn't receive it

- Verify the charity's wallet address on their profile page matches the receiving address in the transaction.
- The charity may not have checked their wallet yet. Send them the transaction hash so they can verify.
- Contact [info@giveprotocol.io](mailto:info@giveprotocol.io) with the transaction hash, and we can help confirm delivery.

## Common Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 4001 | You rejected the transaction in your wallet | Try again and click Confirm when prompted |
| -32002 | A request is already pending in your wallet | Open your wallet and approve or reject the pending request |
| 4902 | The network hasn't been added to your wallet | Approve the network addition prompt, or add it manually via [chainlist.org](https://chainlist.org) |
| -32603 | Internal error from the RPC provider | Try again. If persistent, the network's RPC may be temporarily overloaded. |

## Disconnecting Your Wallet

To disconnect your wallet from Give Protocol:

1. Click your wallet address in the navigation bar.
2. Select **Disconnect Wallet** from the dropdown menu.

This removes the connection between Give Protocol and your wallet. It does not affect any donations already made — those are permanently recorded on the blockchain.

## Still Need Help?

Email us at [info@giveprotocol.io](mailto:info@giveprotocol.io). Include:

1. **Your wallet address** (the public address, never your seed phrase or private key).
2. **The network** you were using (Base, Optimism, or Moonbeam).
3. **Transaction hash** (if you have one) — from your wallet's activity log or a block explorer.
4. **What happened** — error message, screenshot, or description.

We respond within one business day.
