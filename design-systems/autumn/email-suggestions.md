# Email Suggestions for Stripe Webhooks

## 1. `payment_intent.succeeded`

**Email:** "Welcome / Payment Successful"

**Contains:**
- Confirmation the payment went through
- What the customer now has access to
- Onboarding steps or setup links
- Receipt link (optional)

## 2. `customer.subscription.created`

**Email:** "Your subscription has started"

**Contains:**
- Confirmation the subscription was created
- Plan name + billing interval
- When billing begins (if trialed)
- Link to account/billing portal

## 3. `invoice.payment_failed`

**Email:** "Your payment failed — update your card"

**Contains:**
- Notification the attempt failed
- Reason (if available)
- Link to update payment method
- Date Stripe will retry the charge

## 4. `payment_intent.requires_payment_method`

**Email:** "Action required — your payment method needs to be updated"

**Contains:**
- Explanation that Stripe couldn't charge the card
- Direct link to fix payment details
- Warning that failure may cancel the subscription

## 5. `invoice.upcoming`

**Email:** "Your subscription renews soon"

**Contains:**
- Renewal date
- Renewal amount
- Current plan summary
- Link to change plan or update billing

## 6. `customer.subscription.trial_will_end`

**Email:** "Your trial ends in X days"

**Contains:**
- Number of days left
- What happens after the trial
- Billing amount
- CTA to upgrade or confirm payment method

## 7. `customer.subscription.deleted`

**Email:** "Your subscription has been canceled"

**Contains:**
- Confirmation of cancellation
- Final access end date
- Link to reactivate (optional)
- "We're sad to see you go" tone

## 8. `charge.refunded`

**Email:** "Your refund is on the way"

**Contains:**
- Refund amount
- What product/period was refunded
- Expected timeline for funds
- Support contact link