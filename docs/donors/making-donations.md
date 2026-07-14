---
title: Making a Donation
description: How to donate to a charity on Give Protocol — by card, PayPal, or cryptocurrency. Covers finding an organization, the payment flow, and what to expect.
permalink: /docs/donors/making-donations/
---

# Making a Donation

Give Protocol supports two ways to donate: **by card** (credit or debit) and **by crypto** (from a connected wallet). You don't need both — pick whichever works for you.

This page walks through the card (fiat) donation flow. For crypto donations, see the [Crypto Giving Guide](/docs/donors/crypto-giving/).

## Find a Charity

1. From the homepage or navigation bar, click **Browse** or use the search bar.
2. Search by organization name, Tax ID, location, or cause category (e.g., Education, Health, Environment).
3. Click on a charity to open its profile page.

Each profile shows:

- **Organization name and location**
- **Verification status** — look for the "Verified nonprofit" badge, which means the organization has completed identity verification on Give Protocol. A tooltip shows the specific registration type for the organization's home country (for example, 501(c)(3) for US organizations).
- **Sector code** — the broad category of the organization's work (e.g., Arts & Culture, Human Services).
- **Registration year** — when the organization was originally registered with its national authority.
- **Mission statement** and impact statistics.

> **Unclaimed profiles** are auto-populated from official public registry data. You can still donate to an unclaimed charity — your contribution will be held until the organization claims its profile. You can cancel an escrowed donation at any time before it is released.

## Start a Donation

On the charity's profile page, you'll see two buttons:

- **Give Once** — a one-time donation.
- **Give Monthly** — a recurring monthly gift that is charged automatically to your card each month. You can cancel at any time via the link in your receipt email.

Click either button to open the donation modal.

## Choose Your Payment Method

At the top of the donation modal, toggle between **Card** and **Wallet**:

- **Card** uses Helcim (for USD) or PayPal (for other currencies). This page covers the card flow.
- **Wallet** uses your connected crypto wallet. See the [Crypto Giving Guide](/docs/donors/crypto-giving/).

## Enter Your Details

### Amount

Select a quick preset ($25, $50, $100, $250 for USD) or type a custom amount. If donating in a non-USD currency, the presets adjust to that currency's common denominations.

### Currency

Use the currency dropdown to select your currency. USD donations are processed by Helcim. Other currencies (EUR, GBP, CAD, AUD, JPY, and more) are processed by PayPal.

### Your Name and Email

Enter your full name and email address. Your email is used to send your donation receipt. No account is required for one-time card donations — guest checkout is available.

### Cover Processing Fees (Optional)

Check this box to add a small amount (3% of your donation) so that 100% of your intended amount reaches the charity. For example, on a $50 donation, checking this box adds $1.50, bringing your total to $51.50.

If you leave it unchecked, the processing fee is deducted from the donation amount.

### Age Confirmation

You must confirm that you are 16 years of age or older. This is a legal requirement under our [Privacy Policy](/privacy). If you are under 16, you cannot make a donation through Give Protocol.

### Donation Data Consent

Before completing your donation, you must check the consent box:

> "I understand my donation record links me to [charity name]. Where that could indicate a religious, political, or philosophical affiliation, I explicitly consent to Give Protocol processing this record to complete and administer my donation."

**What this means in plain language:** When you donate to a charity, your donation record is linked to that organization. Depending on the charity's mission (for example, a religious organization or a political advocacy group), that link could reveal something about your personal beliefs. European data protection law (GDPR Article 9) treats this kind of information as sensitive and requires your explicit consent before we can process it.

By checking this box, you are giving Give Protocol permission to store and process your donation record for the purpose of completing your donation, sending your receipt, and maintaining your donation history. We do not use this information for any other purpose.

This consent applies to both card and crypto donations. The exact text is versioned (`art9-donation-v1`) so you always know which version you agreed to.

## Complete the Payment

Click the **Donate** button (which shows your total amount). What happens next depends on your currency:

### USD (Helcim)

A secure payment window opens, hosted by Helcim (our PCI-compliant payment processor). Enter your card details directly in this window. Your card information never touches Give Protocol's servers.

After you submit:
1. Helcim processes the charge.
2. Give Protocol verifies the transaction.
3. You see a success confirmation.

### Other Currencies (PayPal)

A PayPal window opens where you can pay using your PayPal account or enter card details directly through PayPal's checkout.

## After You Donate

When your donation is processed:

- A **success message** confirms your gift, showing the amount and charity name.
- A **donation receipt** is emailed to the address you provided. The receipt includes the charity's name, Tax ID, your donation amount, the date, transaction reference, and tax-deductibility language appropriate to the charity's country.
- If you are signed in, the donation appears in your [Give Dashboard](/docs/donors/tracking-impact/) immediately.
- For guest donations (no account), the email receipt is your record.

For monthly donations, your card is charged automatically each month. You can cancel anytime using the link in any receipt email.

See [After You Donate](/docs/donors/tracking-impact/) for more on receipts, your dashboard, and exporting your donation history.

## Security Notes

- **Card details are never stored by Give Protocol.** Helcim and PayPal handle all card processing in their own PCI-compliant environments.
- **One-time donations do not save your card.** You will need to re-enter card details for future donations.
- **The donation consent checkbox is required.** Your consent record is stored with a version identifier for audit purposes.
- **Blockchain transactions are irreversible.** Card donations processed through Helcim or PayPal follow standard payment refund policies — contact [info@giveprotocol.io](mailto:info@giveprotocol.io) if you need help.

## Need Help?

- [Troubleshooting donation problems](/docs/troubleshooting/donation-problems/)
- [Contact us](/help-center/need-help/) — email [info@giveprotocol.io](mailto:info@giveprotocol.io)
