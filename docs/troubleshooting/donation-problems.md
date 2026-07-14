---
title: Donation Problems
description: Solutions for common issues with card donations, payment processing, receipts, and recurring gifts on Give Protocol.
permalink: /docs/troubleshooting/donation-problems/
---

# Donation Problems

This page covers common issues with card (fiat) donations. For crypto wallet and transaction issues, see [Wallet & Transaction Troubleshooting](/docs/troubleshooting/wallet-transactions/).

## Card Payment Failed

### The Helcim payment window didn't open

- **Check your browser's popup blocker.** The Helcim secure payment window opens as a modal overlay. Some ad blockers or popup blockers may interfere. Try disabling them for giveprotocol.io temporarily.
- **Wait for the payment form to load.** After clicking Donate, a "Loading secure payment form..." message appears while the Helcim script loads. If it takes more than 10 seconds, click **Retry Payment Setup**.
- **Try a different browser.** If the payment form consistently fails to load, try Chrome, Firefox, or Edge.

### "Payment System Offline" error

This means the Helcim payment script could not be loaded. This is usually temporary:

1. Wait a minute and try again.
2. If the problem persists, try a crypto donation instead (toggle to **Wallet** in the donation modal).
3. If you're using a VPN or corporate network, the Helcim domain (`secure.helcim.app`) may be blocked. Try from a personal network connection.

### Card was declined

- Verify your card details (number, expiry, CVV) are correct.
- Check that your card has sufficient funds or credit available.
- Some banks block international or online-only transactions by default. Contact your bank to authorize the transaction.
- Try a different card.

### PayPal payment didn't complete

For non-USD donations processed through PayPal:

- Make sure you completed the payment in the PayPal popup window. If the window closed before you finished, try again.
- Check your PayPal account for any pending authorization or payment holds.
- Ensure your PayPal account has a confirmed payment method (card or bank account).

## Receipt Not Received

### Check your spam or junk folder

Donation receipts are sent from `notifications@giveprotocol.io`. Some email providers may filter these into spam or promotions.

### Allow up to 5 minutes

Receipts are sent immediately after payment confirmation, but email delivery can take a few minutes depending on your email provider.

### Guest donations

If you donated without signing in, the receipt is sent to the email address you entered in the donation form. Double-check that you entered the correct email.

### Signed-in donations

If you were signed in, you can also access your donation history and download records from your [Give Dashboard](/docs/donors/tracking-impact/).

### Still missing?

Contact us at [info@giveprotocol.io](mailto:info@giveprotocol.io) with the approximate date, amount, and charity name. We can resend your receipt.

## Monthly Donation Issues

### How do I cancel a recurring donation?

- **From your dashboard:** Go to your Give Dashboard, find the scheduled donation, and click **Cancel**.
- **From your receipt email:** Each monthly receipt includes a cancellation link.

Cancelling stops all future charges. Donations already processed are not refunded.

### I was charged but didn't get a receipt

Check your spam folder first. If the receipt is truly missing, contact [info@giveprotocol.io](mailto:info@giveprotocol.io) with your email address and the charge date.

### I want to change the amount

Cancel the existing recurring donation and set up a new one with the desired amount. There is no way to modify an active schedule in place.

## Consent Checkbox Issues

### "You must consent to donation data processing to proceed"

This error appears when the donation data consent checkbox is not checked. This consent is required for all donations — it authorizes Give Protocol to process your donation record under GDPR Article 9(2)(a), because your donation to a specific charity could reveal a religious, political, or philosophical affiliation.

Read the consent statement carefully. If you have questions about what it means, see the [donation data consent explanation](/docs/donors/making-donations/#donation-data-consent).

### Age confirmation required

You must confirm that you are 16 or older to donate. This is a legal requirement under our Privacy Policy. If you do not check the age confirmation box, the donation form cannot be submitted.

## Amount or Currency Issues

### Minimum donation

There is no strict minimum enforced by Give Protocol, but payment processors have their own minimums. For very small amounts, the processing fee may exceed the donation value.

### Currency not available

- **USD** is processed by Helcim (card payments).
- **All other currencies** are processed through PayPal.

If your preferred currency isn't in the dropdown, select a close alternative or use crypto instead.

### Fee calculation looks wrong

The optional fee offset adds 3% of your donation amount to cover processing costs. For example:
- $50 donation + 3% = $50 + $1.50 = **$51.50 total charge**

The charity receives your full intended donation amount. The fee offset covers the payment processor's charges so nothing is deducted from your gift.

## Refunds

### Card donations

Contact [info@giveprotocol.io](mailto:info@giveprotocol.io) with your transaction details. Refund eligibility depends on the payment processor's policies and the charity's agreement.

### Crypto donations

Blockchain transactions are irreversible. Once a crypto donation is confirmed on-chain, it cannot be reversed by Give Protocol. Contact the charity directly if you need to discuss a return of funds.

## Still Need Help?

Email us at [info@giveprotocol.io](mailto:info@giveprotocol.io). Include:

1. **What you were trying to do** — donate by card, set up monthly gift, etc.
2. **What happened** — error message, screenshot, or description.
3. **Your email address** — so we can look up your donation record.
4. **Transaction reference** (if you have one) — from your receipt or dashboard.

We respond within one business day.
