---
layout: page
title: Wallet Connection
description: How to connect your crypto wallet to Give Protocol.
---

## Supported Wallets

Give Protocol supports the following wallets:

| Wallet | Type | Recommended For |
|--------|------|-----------------|
| MetaMask | Browser extension / Mobile | Beginners, most users |
| WalletConnect | QR-code based | Mobile users |
| Coinbase Wallet | Browser extension / Mobile | Coinbase users |

## Connecting MetaMask

1. Install the [MetaMask extension](https://metamask.io) for your browser
2. Create or import a wallet in MetaMask
3. On Give Protocol, click **Connect Wallet**
4. Select **MetaMask** from the list
5. MetaMask will ask you to approve the connection — click **Connect**
6. Your wallet address is now linked

## Adding Moonbeam Network

Give Protocol runs on the Moonbeam network. Add it to MetaMask:

1. Open MetaMask → **Settings** → **Networks** → **Add Network**
2. Enter the following details:
   - **Network Name**: Moonbeam
   - **RPC URL**: `https://rpc.api.moonbeam.network`
   - **Chain ID**: `1284`
   - **Currency Symbol**: `GLMR`
   - **Block Explorer**: `https://moonbeam.moonscan.io`

## Troubleshooting

**Wallet not connecting?**
- Ensure your browser extension is unlocked
- Try refreshing the page
- Clear browser cache and retry

**Wrong network?**
- Switch to the Moonbeam network in MetaMask
- Give Protocol will prompt you automatically if you are on the wrong network

**Transaction failing?**
- Check that you have enough GLMR for gas fees
- Try increasing the gas limit slightly

## Security Note

Give Protocol will **never** ask for your seed phrase or private key. Only approve connection requests from `app.giveprotocol.io`.
