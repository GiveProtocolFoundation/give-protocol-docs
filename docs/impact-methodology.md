---
layout: modern
title: "Impact Methodology"
description: "How the Give Protocol Impact Calculator estimates real-world outcomes from your donations"
permalink: /docs/impact-methodology/
---

# Impact Methodology: How We Calculate Change

At the Give Protocol, we believe that transparency is the foundation of trust. To help donors understand the real-world value of their contributions, we use a data-driven approach to estimate the outcomes of every dollar moved through our Portfolio Funds.

---

## 1. The Multiplier Framework

Every Portfolio Fund is assigned specific **Impact Multipliers**. These are mathematical constants that represent the estimated cost of a single "unit" of impact (e.g., one tree planted, one meal served, or one day of schooling).

The formula used by our Impact Calculator is:

<div class="formula-block">
  <strong>Impact Units</strong> = Donation Amount (Net) &divide; Impact Multiplier
</div>

### Data Normalization

Because a Portfolio Fund aggregates multiple organizations, the multiplier is typically a **weighted average**.

{% include callout.html type="info" title="Example" content="If Organization A protects an acre for $20 and Organization B protects an acre for $30, and the fund splits donations 50/50, the Fund Multiplier is set at <strong>$25</strong>." %}

---

## 2. Sourcing Our Data

We do not invent these numbers. We gather data through a rigorous intake process:

<div class="source-list">

### <i class="fas fa-file-alt"></i> Direct Reporting

We collect audited impact reports from our supported 501(c)(3) and international nonprofit partners.

### <i class="fas fa-balance-scale"></i> Sector Benchmarking

In cases where specific data is unavailable, we use conservative estimates from industry leaders like **GiveWell**, **Charity Navigator**, and **Guidestar**.

### <i class="fas fa-calendar-check"></i> Annual Reviews

Multipliers are reviewed and updated every January to account for inflation, shifting operational costs, and new efficiency gains within our partner organizations.

</div>

---

## 3. Administrative & Platform Costs

To ensure the calculator remains as accurate as possible, we account for the gap between the "Gross Donation" and the "Net Impact":

- **Net-to-Project Ratio** &mdash; We clearly define what percentage of a donation reaches the field versus what is used for platform maintenance or organizational overhead.

- **The "Net" Calculation** &mdash; If the Give Protocol or a partner organization retains a 5% administrative fee, the calculator automatically applies the multiplier to 95% of the user's input.

{% include callout.html type="success" title="Our Commitment" content="We are committed to keeping administrative costs as low as possible so that the maximum amount of every donation reaches the communities that need it most." %}

---

## 4. Disclaimers & Accuracy

While we strive for precision, these numbers are **estimates, not guarantees**.

| Consideration | What It Means |
|---|---|
| **Variable Environments** | The cost of protecting land in Brazil may differ from the cost in Indonesia. Our Environmental Fund uses a global average to simplify the user experience. |
| **Non-Linear Impact** | Some interventions become cheaper at scale, while others become more expensive. Our calculations assume a linear relationship for the sake of clarity. |
| **Outcome vs. Output** | We distinguish between *outputs* (e.g., books delivered) and *outcomes* (e.g., literacy improved). Our calculator primarily tracks verifiable **outputs**. |

{% include callout.html type="warning" title="Important" content="The Impact Calculator is a transparency tool designed to give donors an intuitive sense of scale. It should not be interpreted as a contractual guarantee of specific results." %}

---

## Questions?

If you have questions about our methodology or would like to review the source data for a specific fund, please reach out to our team through the [Support](/docs/support/) page.
