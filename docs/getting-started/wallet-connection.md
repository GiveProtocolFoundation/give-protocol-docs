---
title: Wallet Connection
description: What crypto wallets are, which ones work with Give Protocol, how to connect one, and why it's entirely optional.
permalink: /docs/getting-started/wallet-connection/
---

# Wallet Connection

A crypto wallet is a piece of software that lets you hold, send, and receive cryptocurrency. On Give Protocol, connecting a wallet lets you make crypto donations, view on-chain transaction history, and earn blockchain-verified credentials. But it's entirely optional — you can use Give Protocol fully through fiat donations without ever connecting a wallet.

## Do I Need a Wallet?

**No.** You can create an account with just an email address and donate using a credit card, debit card, or bank transfer through our fiat payment processors (Helcim for USD, PayPal for international currencies). Many donors use Give Protocol this way.

A wallet becomes useful if you want to:

- Donate cryptocurrency (ETH, USDC, DAI, and other supported tokens)
- See your donation history verified on a public blockchain
- Earn non-transferable Soul-Bound Token (SBT) credentials for donations or volunteer work
- Participate in governance proposals (future feature)

You can always add a wallet later from your dashboard — there's no pressure to set one up during account creation.

## Supported Wallets

Give Protocol supports EVM-compatible browser wallets, including:

- **MetaMask** — The most widely used browser wallet. Available as a Chrome, Firefox, Brave, and Edge extension, and as a mobile app.
- **Coinbase Wallet** — A self-custody wallet from Coinbase (separate from the Coinbase exchange app). Available as a browser extension and mobile app.
- **WalletConnect** — A protocol that connects many different wallet apps to web applications by scanning a QR code.

If you have another EVM-compatible wallet that supports WalletConnect, it should work with Give Protocol.

## Supported Networks

Give Protocol operates on multiple blockchain networks. When you connect your wallet, you can switch between:

| Network | Native Token | Status |
|---------|-------------|--------|
| Base | ETH | Live |
| Ethereum | ETH | Live |
| Optimism | ETH | Live |
| Arbitrum | ETH | Live |
| Polygon | POL | Live |
| Avalanche | AVAX | Live |

When you make a donation, the platform shows only the tokens available on your currently connected network. If you need to switch networks, Give Protocol will prompt your wallet to do so automatically.

## How to Connect a Wallet

### If You Already Have a Wallet

1. Make sure your wallet extension (MetaMask, Coinbase Wallet, etc.) is installed and unlocked in your browser.
2. On Give Protocol, click the **Connect Wallet** button in the navigation bar, or go to **Dashboard → Settings → Wallet**.
3. Select your wallet from the list of detected options.
4. Your wallet will ask you to approve the connection. This simply allows the site to see your public address — it does not give Give Protocol access to your funds.
5. You may also be asked to sign a message to verify ownership. This is a free signature, not a transaction — it will not cost gas or move any funds.

### If You Don't Have a Wallet Yet

If you'd like to start using crypto donations, here's how to set up MetaMask (the most common option):

1. Visit [metamask.io](https://metamask.io) and install the browser extension for your browser.
2. Follow MetaMask's setup wizard to create a new wallet. You'll be given a **seed phrase** (12 or 24 words) — write this down on paper and store it somewhere safe. This is your only backup if you lose access to your wallet. Never share it with anyone.
3. Once your wallet is set up, return to Give Protocol and connect it using the steps above.

To add one of Give Protocol's supported networks to MetaMask:

1. Visit [chainlist.org](https://chainlist.org).
2. Search for the network you want (e.g., "Base," "Ethereum," or "Optimism").
3. Click **Add to Wallet** and approve the network addition in MetaMask.

Or, when you attempt to donate on a specific chain through Give Protocol, the platform will prompt MetaMask to add and switch to the correct network automatically.

## Linking a Wallet to an Existing Account

If you created your account with email and want to add a wallet later:

1. Go to **Dashboard → Settings → Wallet**.
2. Click **Link a Wallet**.
3. Connect your wallet and sign the verification message.
4. Your wallet is now linked to your account. Future visits let you sign in with either email or wallet — both resolve to the same dashboard and history.

A wallet can only be linked to one account. If the wallet is already linked to a different account, you'll see an error.

## Unlinking a Wallet

If you need to disconnect your wallet:

1. Go to **Dashboard → Settings → Wallet**.
2. Click **Unlink Wallet** next to your linked address.
3. Confirm the action.

Unlinking a wallet does not affect any donations you've already made — those transactions are permanently recorded on the blockchain. It simply removes the association between that wallet address and your Give Protocol account.

## For Charities: Organizational Wallets

If you manage a charity account, the wallet setup process is different. Personal wallets are not linked to charity accounts during signup. Instead, your organization's receiving wallet is configured through the charity dashboard's onboarding checklist after your identity is verified.

Your organization's receiving wallet should be a dedicated organizational wallet — ideally a multi-signature wallet — not a personal wallet belonging to any individual staff member. This is important for governance, security, and compliance.

For more details, see [Setting Up Your Profile](/docs/getting-started/setting-up-profile/).

## Security Reminders

- **Never share your seed phrase or private keys.** Give Protocol will never ask for them.
- **Signing a message is free.** If your wallet asks you to approve a transaction with a gas fee during login or account linking, stop and verify you're on the real giveprotocol.io website.
- **Use a hardware wallet for large holdings.** If you hold significant crypto assets, consider using a hardware wallet (Ledger, Trezor) for an extra layer of security.
- **Verify the URL.** Always make sure you're on `giveprotocol.io` before connecting your wallet. Phishing sites may mimic the interface to steal wallet connections.
