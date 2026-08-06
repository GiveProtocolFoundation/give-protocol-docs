---
title: Technical Reference
description: Smart contracts, API documentation, security architecture, and supported blockchain tokens
permalink: /docs/technical/
---

Technical documentation for developers and advanced users who want to understand Give Protocol's blockchain infrastructure, integrate with our APIs, or learn about our security model.

## Technical Guides

<div class="guide-cards">

### Smart Contracts
Learn about Give Protocol's smart contract architecture, including donation contracts, verification contracts, and how funds are managed on-chain.

[Smart Contracts](/docs/technical/smart-contracts/){: .btn-primary}

### API Documentation
Integrate with Give Protocol using our REST API. Access donation data, organization information, and more programmatically.

[API Documentation](/docs/technical/api-docs/){: .btn-secondary}

### Security Model
Understand the security measures protecting Give Protocol, including smart contract audits, data encryption, and access controls.

[Security Model](/docs/technical/security-model/){: .btn-secondary}

### Supported Tokens
View the complete list of cryptocurrencies supported for donations on Give Protocol, including token addresses and network details.

[Supported Tokens](/docs/technical/supported-tokens/){: .btn-secondary}

</div>

## Platform Architecture

Give Protocol is a standard multi-chain EVM application, running natively on six blockchain networks: Base (primary), Ethereum, Optimism, Arbitrum, Polygon, and Avalanche. This provides:

- **EVM Compatibility** - Use standard Ethereum tooling and wallets on every supported network
- **Multi-Chain Reach** - Donors can give from whichever supported network their wallet already holds funds on
- **Low Fees** - Layer 2 networks like Base, Optimism, and Arbitrum offer significantly lower transaction costs than Ethereum mainnet
- **Fast Finality** - Quick transaction confirmation times

## Smart Contract Overview

Our platform uses several key smart contracts:

1. **Donation Contract** - Handles donation transactions and fee distribution
2. **Organization Registry** - Stores verified organization information on-chain
3. **Volunteer Contract** - Records volunteer hours and credentials
4. **CEF Contract** - Manages Charitable Endowment Fund operations

All contracts are audited by leading security firms and are open source.

## API Access

Give Protocol provides a REST API for:

- Querying organization information
- Retrieving donation history
- Accessing impact metrics
- Integrating with external applications

[View API documentation](/docs/technical/api-docs/)

## Security Practices

- **Smart Contract Audits** - Regular third-party security audits
- **Bug Bounty Program** - Rewards for responsible vulnerability disclosure
- **No Private Key Storage** - We never have access to user funds
- **Encryption** - End-to-end encryption for sensitive data

## For Developers

Interested in building on Give Protocol? Check out:

- [Smart Contract Documentation](/docs/technical/smart-contracts/)
- [API Reference](/docs/technical/api-docs/)
- [GitHub Repository](https://github.com/GiveProtocol/Duration-Give)

## Need Help?

Technical questions? Check our [troubleshooting guide](/docs/troubleshooting/platform-errors/) or [contact support](/docs/support/).
