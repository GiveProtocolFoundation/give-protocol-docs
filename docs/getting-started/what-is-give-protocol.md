---
title: What Is Give Protocol
description: An overview of Give Protocol — what it does, how it works, and what makes it different from traditional giving platforms.
permalink: /docs/getting-started/what-is-give-protocol/
---

# What Is Give Protocol

Give Protocol is a philanthropic platform built on blockchain technology that enables transparent, efficient charitable giving. It connects donors directly with verified charitable organizations through cryptocurrency and traditional payment methods, while introducing sustainable funding mechanisms that go beyond one-time donations.

## The Problem We're Solving

Traditional charitable giving faces persistent challenges that reduce its effectiveness:

- **Transparency gaps.** Most donors have limited visibility into how their contributions are used. Impact reporting often lags months behind the actual donation.
- **High overhead.** Administrative costs, payment processing fees, and intermediary charges can consume a significant portion of donated funds before they reach the intended cause.
- **Unsustainable funding.** The majority of charitable funding comes through short-term, project-specific grants or one-time donations, creating instability for organizations trying to plan long-term.
- **Limited recognition for volunteers.** Volunteer contributions — often as valuable as monetary donations — lack a standardized, portable system for verification and recognition.

## How Give Protocol Works

Give Protocol addresses these challenges through four core features:

### Direct Donations
Donors can give directly to verified charities using cryptocurrency or fiat (card/bank) payments. Crypto donations are routed through smart contracts that transfer funds directly to the charity's wallet in a single, transparent, on-chain transaction. Fiat donations are processed through Helcim (USD) or PayPal (international currencies).

Give Protocol charges a 0.5% platform fee on direct donations — deducted automatically by the smart contract for crypto, or applied to the gross amount for fiat. For crypto, donors also pay the standard blockchain network fee (gas). For fiat, donors also pay the payment processor's standard fee (charged by Helcim or PayPal). This is significantly lower than the 3–5% charged by most traditional giving platforms.

### Charitable Equity Funds (CEFs)
CEFs are Give Protocol's flagship innovation for sustainable funding. They work like a crypto-native endowment: donated assets are deployed into conservative, audited yield-generating protocols (such as stablecoin lending on Aave or Moonwell), and the yield produced is distributed to the designated charity on a regular schedule.

Each charity has its own self-custody CEF vault — the charity retains sole ownership and signing authority over its assets. The Foundation provides the smart contract infrastructure and curated strategy configurations but never takes custody of the principal. A 5% fee on generated yield (never on the principal) is the primary way Give Protocol funds its operations.

### Portfolio / Cause Funds
Thematic pooled funds organized by field of charitable service — for example, Environmental Impact, Poverty Relief, or Education. Donors contribute to a cause area, and the accumulated funds are distributed equally among verified charities within that category. The Foundation curates the initial roster of eligible organizations, with final composition determined through community governance.

### Blockchain-Verified Volunteer Credentials
Give Protocol uses non-transferable Soul-Bound Tokens (SBTs) to provide verifiable, portable recognition for volunteer contributions. Verified charitable organizations can issue credential tokens to volunteers attesting to their hours, skills, and impact. These credentials are recorded on the blockchain, cannot be traded or faked, and can be exported as W3C Verifiable Credentials for use anywhere — on a resume, a LinkedIn profile, or another platform.

## What Makes It Different

**Minimal, transparent fees.** A 0.5% platform fee on direct donations is a fraction of what traditional platforms charge (3–5% or more). Portfolio funds carry a 1% fee. CEF fees apply only to generated yield, never to principal. All fees are disclosed upfront before the donor confirms.

**Sustainable funding, not just one-time gifts.** CEFs transform donations into ongoing revenue streams for charities, reducing their dependence on constant fundraising.

**True transparency.** Every crypto donation is recorded on a public blockchain. Donors can independently verify that their funds reached the intended recipient by checking the transaction on a block explorer.

**Dual donation rails.** Donors can give by card or crypto. The platform doesn't force anyone into cryptocurrency — fiat donations work without a wallet, and the two systems are completely separate.

**Multi-chain support.** Give Protocol operates on Base, Ethereum, Optimism, Arbitrum, Polygon, and Avalanche. Donors can give using whichever blockchain network they prefer.

**Volunteer-driven and nonprofit.** Give Protocol Foundation is a 501(c)(3) nonprofit run by volunteers. There are no investors seeking returns and no token to speculate on. The protocol uses established ecosystem tokens (ETH, USDC, DAI, and others) rather than issuing its own.

## The Technology

Give Protocol is built on EVM-compatible blockchains using Solidity smart contracts and the OpenZeppelin security library. The frontend is a React-based progressive web application. The backend uses Supabase (Postgres database, authentication, file storage, and serverless functions). Fiat payments are handled by Helcim and PayPal, which are architecturally isolated from the crypto infrastructure.

Charity verification integrates with official national charity registers — starting with the US IRS Exempt Organizations dataset and expanding to include registers from the UK, Canada, Australia, and other jurisdictions. This allows the platform to auto-populate charity profiles from trusted public data and verify organizational legitimacy.

## Current Status

Give Protocol is in its **Genesis Phase** — the platform is live on testnet and approaching mainnet launch pending security audits. Core features including multi-chain donation support, charity profiles, fiat integration, and the IRS dataset import are built and functional. CEF vault deployment, the SBT credential system, and Portfolio/Cause Funds are in active development.

The platform is open source and developed by a global volunteer team. You can follow development progress on GitHub or join the community on Discord.
