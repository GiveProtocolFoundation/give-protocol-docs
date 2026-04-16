---
layout: modern
title: "Earning Credentials"
description: "Build your verified volunteer credentials and Soul-Bound Tokens on Give Protocol"
permalink: /docs/volunteers/earning-credentials/
---

# Earning Credentials

Give Protocol records verified volunteer contributions as **Soul-Bound Tokens (SBTs)** on the blockchain. SBTs are permanent, non-transferable credentials tied to your wallet — they cannot be sold, delegated, or faked. They serve as a portable, independently verifiable record of your volunteer history.

## What Are Soul-Bound Tokens?

A Soul-Bound Token is a type of blockchain credential that is permanently attached to the wallet address it was issued to. Unlike regular NFTs, SBTs cannot be transferred or sold. This makes them suitable for representing genuine personal achievements.

When an organization validates your volunteer hours or skills, Give Protocol issues an SBT to your wallet. Anyone — an employer, another organization, a grant committee — can verify your credential by looking up your wallet address on a public blockchain explorer without contacting Give Protocol.

## Credential Types

### Hour Milestone Credentials

Issued automatically when your cumulative validated hours cross a milestone threshold:

| Milestone | Hours Required | Token Name |
|-----------|---------------|------------|
| Early Bird | 25 validated hours | `volunteer.milestone.25h` |
| Committed | 100 validated hours | `volunteer.milestone.100h` |
| Dedicated | 250 validated hours | `volunteer.milestone.250h` |
| Champion | 500 validated hours | `volunteer.milestone.500h` |
| Legend | 1,000+ validated hours | `volunteer.milestone.1000h` |

> **Only validated hours count.** Hours you have logged but that have not been approved by the host organization do not count toward milestone thresholds. See [Time Tracking]({{ '/docs/volunteers/time-tracking/' | relative_url }}) for details on the validation workflow.

### Skill Badges

Issued when an organization explicitly endorses a skill you demonstrated during a volunteer engagement. Skill badges capture *what* you can do, not just *how long* you served.

**Examples of endorsable skills:**

- Teaching & mentoring
- Technical skills (IT support, web development, data analysis)
- Healthcare assistance
- Project management & leadership
- Event coordination
- Language interpretation
- Legal or financial pro bono work

Skill badge issuance is initiated by the organization, not the volunteer. If you believe a skill should be recognized, ask your volunteer coordinator to submit an endorsement through their portal.

### Organization Endorsements

An organization endorsement is a credential issued directly by a specific charity or non-profit. It attests that you served with that organization and met their standards. Endorsements can be issued independent of hour milestones and are useful for:

- Demonstrating a long-term relationship with a specific cause
- Satisfying professional development requirements
- Supporting grant or scholarship applications

## How Credentials Are Issued

1. **Earn**: Complete validated volunteer hours or receive a skill endorsement from an organization.
2. **Trigger**: The Give Protocol platform detects the qualifying event (milestone reached, skill endorsed, organization endorsement submitted).
3. **Mint**: A Soul-Bound Token is minted on-chain and sent to your registered wallet address.
4. **Notify**: You receive a notification in your dashboard that a new credential has been issued.

No action is required from you to receive a credential — issuance is automatic once the qualifying conditions are met.

## Viewing Your Credentials

All credentials issued to you appear in the **Credentials** tab of your volunteer dashboard. Each credential entry shows:

- Credential type and name
- Issuing organization (for skill badges and endorsements)
- Date issued
- On-chain transaction hash (links to the public blockchain explorer)
- Wallet address the credential was issued to

## Sharing Credentials

Because SBTs live on the blockchain, you can share them by:

- **Dashboard link**: Share your public profile URL — credentials are visible to anyone you share it with.
- **Transaction hash**: Provide the on-chain transaction hash directly for independent verification.
- **Wallet address lookup**: Any blockchain explorer can display all SBTs associated with your wallet address.

You do not need Give Protocol's involvement to prove your credentials. The blockchain record is the proof.

## Frequently Asked Questions

**What if I change my wallet address?**
SBTs are permanently tied to the wallet they were issued to. If you change wallets, previously issued SBTs remain on your old address. You can add your new wallet address to your profile; future credentials will be issued to the new address.

**Can I transfer or sell my SBTs?**
No. Soul-Bound Tokens are non-transferable by design. They cannot be sent to another wallet, sold, or delegated. This is intentional — it ensures credentials represent genuine personal achievement.

**What if an SBT was issued in error?**
Contact Give Protocol support. We can work with the issuing organization to revoke a credential if it was issued incorrectly. Revocation is recorded on-chain and visible in your credential history.

**Do I need to pay gas fees to receive credentials?**
No. Give Protocol covers the gas fees for SBT issuance. You do not need to take any action or spend any funds to receive a credential.

## Related Documentation

- [Time Tracking]({{ '/docs/volunteers/time-tracking/' | relative_url }}) — How to log hours and get them validated
- [Finding Opportunities]({{ '/docs/volunteers/finding-opportunities/' | relative_url }}) — Discover volunteer roles that build specific skills
- [Technical Reference: Smart Contracts]({{ '/docs/technical/smart-contracts/' | relative_url }}) — Technical details of SBT implementation
