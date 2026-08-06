---
title: Crypto Giving Guide
description: How to donate cryptocurrency on Give Protocol — what a wallet is, which networks are supported, how to connect and donate, gas fees, and what's visible on-chain.
permalink: /docs/donors/crypto-giving/
---

# Crypto Giving Guide

Give Protocol lets you donate cryptocurrency directly to verified charities. Your donation is processed by a smart contract on a public blockchain, creating a transparent and verifiable record of your gift.

This guide covers everything a first-time crypto donor needs to know. If you already have a wallet and just want the step-by-step, skip to [Making a Crypto Donation](#making-a-crypto-donation).

## What Is a Crypto Wallet?

A crypto wallet is software that lets you hold, send, and receive cryptocurrency. Think of it like a digital bank account that you control directly — no bank in the middle. Your wallet has:

- A **public address** (like an account number) that others can send funds to. This is safe to share.
- A **private key** (like a password) that lets you authorize transactions. Never share this with anyone.
- A **seed phrase** (12 or 24 words) that can recover your wallet if you lose access. Write it down on paper and store it securely. Never enter it on a website.

Wallets are typically browser extensions or mobile apps. When you visit Give Protocol with a wallet installed, the site can see your public address and token balances — but it can never access your private key or move your funds without your explicit approval.

## Supported Wallets

Give Protocol works with EVM-compatible browser wallets. When you open the wallet connection modal, installed wallets are shown first:

| Wallet | Install | Notes |
|--------|---------|-------|
| **MetaMask** | [metamask.io](https://metamask.io/download/) | Most widely used. Chrome, Firefox, Brave, Edge, mobile. |
| **Rabby** | [rabby.io](https://rabby.io/) | Security-focused with transaction previews. |
| **Phantom** | [phantom.app](https://phantom.app/download) | Popular multi-chain wallet. |
| **Talisman** | [talisman.xyz](https://talisman.xyz/download) | Multi-chain with Polkadot support. |
| **SubWallet** | [subwallet.app](https://subwallet.app/download) | Polkadot and EVM support. |
| **Coinbase Wallet** | [coinbase.com/wallet](https://www.coinbase.com/wallet/downloads) | Self-custody wallet from Coinbase (separate from the exchange). |
| **Ledger** | [ledger.com](https://www.ledger.com/start) | Hardware wallet for maximum security. |

If you don't have a wallet yet, we recommend **MetaMask** for beginners — it's free, widely supported, and has good documentation.

### Setting Up MetaMask

1. Visit [metamask.io](https://metamask.io) and install the browser extension for your browser.
2. Follow the setup wizard to create a new wallet.
3. You will be given a **seed phrase** — 12 words that are your only backup. Write them down on paper (not digitally) and store them somewhere safe. If you lose your seed phrase and your device, your funds are gone permanently.
4. Set a strong password for the extension.
5. Your wallet is ready. Return to [giveprotocol.io](https://giveprotocol.io) to connect it.

## Supported Networks

Give Protocol operates on multiple blockchain networks. Each network has its own tokens, fees, and block explorer.

| Network | Chain ID | Native Token | Typical Gas Fee | Status |
|---------|----------|-------------|-----------------|--------|
| **Base** | 8453 | ETH | < $0.01 | **Default** — recommended |
| **Ethereum** | 1 | ETH | Variable, higher than L2s | Live |
| **Optimism** | 10 | ETH | < $0.01 | Live |
| **Arbitrum** | 42161 | ETH | < $0.01 | Live |
| **Polygon** | 137 | POL | < $0.01 | Live |
| **Avalanche** | 43114 | AVAX | < $0.01 | Live |

**Base is the default network.** It is an Ethereum Layer 2 built by Coinbase, offering very low transaction fees (often fractions of a cent) and fast confirmations. If you're new to crypto giving, Base is the best place to start.

### Available Tokens by Network

| Network | Tokens |
|---------|--------|
| **Base** | ETH, WETH, USDC, USDT, DAI |
| **Ethereum** | ETH, WETH, USDC, USDT, DAI |
| **Optimism** | ETH, WETH, USDC, USDT, DAI, OP |
| **Arbitrum** | ETH, WETH, USDC, USDT, DAI, ARB |
| **Polygon** | POL, WETH, USDC, USDT, DAI |
| **Avalanche** | AVAX, WAVAX, USDC, USDT, DAI |

**Stablecoins** (USDC, USDT, DAI) are cryptocurrencies pegged to the US dollar. One USDC is always worth approximately $1. Donating stablecoins means the charity receives a predictable dollar value regardless of crypto market fluctuations.

### Adding a Network to Your Wallet

If your wallet isn't set to the right network, Give Protocol will prompt you to switch automatically. You can also add networks manually:

1. Visit [chainlist.org](https://chainlist.org).
2. Search for "Base" (chain ID 8453).
3. Click **Add to MetaMask** and approve the network addition.

## Connecting Your Wallet

1. On Give Protocol, click the **Connect Wallet** button in the navigation bar.
2. **Step 1 — Select Network**: Choose the blockchain network you want to donate on (Base, Ethereum, Optimism, Arbitrum, Polygon, or Avalanche).
3. **Step 2 — Select Wallet**: Pick your wallet from the list. Installed wallets appear first with a green indicator.
4. Your wallet extension will ask you to approve the connection. This only shares your public address — it does not give Give Protocol access to your funds.
5. You may be asked to sign a verification message. This is free (no gas fee) and simply proves you own the address.

Once connected, your wallet address and balance appear in the navigation bar. A green dot indicates an active connection.

## Making a Crypto Donation

1. Navigate to a charity's profile page.
2. Click **Give Once** or **Give Monthly**.
3. In the donation modal, toggle to **Wallet** (the crypto payment method).
4. **Select a token** from the dropdown. The dropdown shows only tokens available on your connected network, along with your current balance for each.
5. **Enter an amount.** You can type a crypto amount or switch to fiat view to enter a dollar amount (the conversion happens automatically using live prices). Use the **Max** button to donate your full balance of that token.
6. **Check the consent box** — the same [donation data consent](/docs/donors/making-donations/#donation-data-consent) required for all donations.
7. Click **Donate**.

### What Happens Next

1. **Token approval** (first time only): If you haven't donated this token before, your wallet will ask you to approve the Give Protocol smart contract to transfer tokens on your behalf. This is a standard ERC-20 approval — a one-time transaction that costs a small gas fee. After approval, future donations of the same token skip this step.
2. **Donation transaction**: Your wallet shows the donation details and asks you to confirm. Review the amount and gas fee, then click **Confirm** in your wallet.
3. **Processing**: The transaction is submitted to the blockchain. Give Protocol shows "Processing Donation..." while waiting for confirmation.
4. **Success**: Once confirmed, you see a success message and the donation appears in your [dashboard](/docs/donors/tracking-impact/).

The entire process typically takes 5–15 seconds on Base or Optimism.

## Understanding Gas Fees

Every blockchain transaction requires a small fee called **gas**, paid in the network's native token (ETH on Base/Ethereum/Optimism/Arbitrum, POL on Polygon, AVAX on Avalanche). Gas compensates the network's validators for processing your transaction.

**How much does gas cost?**

On Layer 2 networks like Base, Optimism, and Arbitrum, gas fees are typically less than $0.01 per transaction. Polygon and Avalanche are similarly low. This is much cheaper than Ethereum mainnet (which can cost several dollars per transaction).

**Do I need to hold gas tokens?**

Yes. You need a small amount of the network's native token in your wallet to pay gas:

- **Base, Optimism, or Arbitrum**: A fraction of ETH (as little as $0.05 worth is usually enough for many transactions).
- **Polygon**: A fraction of POL.
- **Avalanche**: A fraction of AVAX.

If you're donating a stablecoin like USDC, you still need a tiny amount of the network's native token in your wallet for the gas fee. Your stablecoin donation amount goes entirely to the charity — gas is a separate charge.

**Where does gas go?**

Gas fees go to the blockchain network's validators, not to Give Protocol or the charity. Give Protocol does not add any additional fee to crypto donations beyond the network gas.

## What Is Visible On-Chain?

Blockchain transactions are public. When you make a crypto donation, the following is permanently recorded on the blockchain and viewable by anyone using a block explorer (such as [basescan.org](https://basescan.org) for Base):

**Publicly visible:**

- Your wallet address (the sender)
- The charity's wallet address (the receiver)
- The token and amount donated
- The transaction hash (a unique identifier)
- The date and time
- The gas fee paid

**Not visible on-chain:**

- Your name, email, or any personal identity
- The charity's name (only its wallet address)
- Your donation history across different charities (unless someone traces your wallet)
- Any off-chain records (receipts, consent records, account data)

Your wallet address is pseudonymous — it doesn't contain your name. However, if someone knows your wallet address, they can see all transactions associated with it on a block explorer. For this reason, some donors use a dedicated wallet for charitable giving.

## Monthly Crypto Donations

Give Protocol supports recurring monthly crypto donations via on-chain scheduled payments. When you set up a monthly gift:

- The smart contract records a 12-month donation schedule.
- Your wallet is charged the specified amount each month.
- You can view active schedules, progress, and next payment dates in your dashboard.
- You can cancel a recurring donation at any time from your dashboard. Any remaining scheduled payments are cancelled and unspent funds are returned.

## After You Donate

- Your donation appears in your [Give Dashboard](/docs/donors/tracking-impact/) immediately after confirmation.
- If you donated while signed in, the donation is linked to your account for history and export.
- You can verify your transaction on a block explorer by clicking the transaction link in your dashboard.
- For Art. 9 consent records, see the [consent section](/docs/donors/making-donations/#donation-data-consent) of the fiat donation guide — the same consent applies to crypto donations.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Insufficient balance" | You don't have enough of the selected token. Check your balance or switch tokens. |
| Transaction stuck / pending | Network congestion. Wait a few minutes — most transactions confirm within a block or two on L2 networks. |
| "Wrong network" | Your wallet is connected to a network that doesn't match. Switch networks in your wallet, or let Give Protocol prompt you to switch. |
| Token approval failed | You may not have enough of the network's native token to pay the gas fee for the approval transaction. Add a small amount and try again. |
| Wallet not detected | Make sure your wallet extension is installed, unlocked, and active in your browser. Try refreshing the page. |

For more help, see [Troubleshooting: Wallet & Transactions](/docs/troubleshooting/wallet-transactions/) or [contact us](/help-center/need-help/).

## Security Reminders

- **Never share your seed phrase or private key.** Give Protocol will never ask for them.
- **Signing a message is free.** If your wallet asks you to pay gas during login or wallet linking (not a donation), something may be wrong — verify you are on the real [giveprotocol.io](https://giveprotocol.io).
- **Blockchain transactions are irreversible.** Always double-check the charity, token, and amount before confirming in your wallet.
- **Use a dedicated donation wallet** if you want extra privacy. This keeps your charitable giving separate from other crypto activity.
- **Start small.** If this is your first crypto donation, try a small amount first to get comfortable with the process.
