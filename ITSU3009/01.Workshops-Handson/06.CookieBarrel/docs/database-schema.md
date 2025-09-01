## Cookie Barrel – MongoDB Database Schema

This schema supports: user login, menu browsing, cart, order placement, payments, order tracking, notifications, admin dashboard, logging, and security.

### Conventions

- **IDs**: MongoDB ObjectIds in `_id`. Foreign keys use ObjectId references.
- **Timestamps**: `createdAt`, `updatedAt` (UTC ISO dates).
- **Money**: Store numeric in `amount` with explicit `currency` (ISO 4217).
- **Snapshots**: Order and cart items embed name/price/options at time of checkout.
- **Security**: Store only password hashes and token hashes. Use TTL indexes for expiry. Consider field-level encryption for PII.

### Collections

#### `users`
- **Purpose**: Customer and admin identities.
- **Key fields**:
  - `email` (unique), `phone` (unique, optional)
  - `passwordHash`, `roles` (e.g., `customer`, `admin`), `status` (`active`|`blocked`)
  - `profile` { `name`, `avatarUrl` }, `addresses`[], `preferences`{}
  - `mfa` { `enabled`, `secret` }, `lastLoginAt`
- **Indexes**: unique on `email`, unique sparse on `phone`, `status`, `createdAt` desc.

#### `authTokens`
- **Purpose**: Refresh tokens / sessions for login.
- **Key fields**: `userId`, `tokenHash`, `device`, `ip`, `userAgent`, `expiresAt`, `revokedAt`.
- **Indexes**: `userId`, TTL on `expiresAt` (0), unique on `tokenHash` (optional), `expiresAt`.

#### `categories`
- **Purpose**: Menu organization.
- **Key fields**: `name`, `slug` (unique), `description`, `position`, `isActive`.
- **Indexes**: unique on `slug`, `isActive`, `position`.

#### `menuItems`
- **Purpose**: Menu products.
- **Key fields**:
  - `categoryIds`[], `name`, `slug` (unique), `description`
  - `price` { `amount`, `currency` }, `options`[] (variants/add-ons), `tags`[], `images`[]
  - `isAvailable`, `inventory` { `track`, `qty` }
- **Indexes**: unique on `slug`; `isAvailable`; multikey on `categoryIds`; text index on `name`, `description`, `tags`.

#### `carts`
- **Purpose**: Temporary shopping carts for guests and users.
- **Key fields**:
  - `userId` or `sessionId`, `status` (`active`|`abandoned`|`converted`)
  - `items`[] { `menuItemId`, `nameSnapshot`, `selectedOptions`, `unitPriceSnapshot`, `quantity`, `lineTotal` }
  - `totals` { `subTotal`, `tax`, `discount`, `deliveryFee`, `grandTotal`, `currency` }, `couponCode`, `expiresAt`
- **Indexes**: `userId`, `sessionId`, `status`, TTL on `expiresAt` (0), `updatedAt`.

#### `orders`
- **Purpose**: Confirmed purchases.
- **Key fields**:
  - `orderNo` (unique), `userId`, `cartId`
  - `items`[] (snapshots as in cart), `totals`, `currency`
  - `paymentStatus` (`pending`|`authorized`|`paid`|`refunded`|`failed`)
  - `orderStatus` (`placed`|`preparing`|`ready`|`out_for_delivery`|`delivered`|`cancelled`)
  - `statusTimeline`[] { `status`, `at`, `note` }, `delivery` { `type`, `address`, `contact` }, `notes`, `couponCode`
- **Indexes**: unique on `orderNo`; compound on `{ userId, createdAt }`; `orderStatus`; `paymentStatus`; `createdAt`.

#### `payments`
- **Purpose**: Payment attempts and outcomes.
- **Key fields**: `orderId`, `provider`, `providerIntentId`, `amount`, `currency`, `status`, `method`, `error`, `idempotencyKey`, `receiptUrl`.
- **Indexes**: `orderId`; unique on `{ provider, providerIntentId }`; `status`; `createdAt`.

#### `shipments`
- **Purpose**: Delivery tracking (optional; or embed in `orders.delivery`).
- **Key fields**: `orderId`, `carrier`, `trackingNumber`, `status`, `checkpoints`[], `estimatedDeliveryAt`, `deliveredAt`.
- **Indexes**: `orderId`; unique on `trackingNumber`; `status`.

#### `notifications`
- **Purpose**: Outbound messages (email/SMS/push).
- **Key fields**: `userId`, `orderId`, `channel`, `templateKey`, `payload`, `status`, `providerMessageId`, `error`, `scheduledAt`, `sentAt`, `retries`.
- **Indexes**: `userId`; `orderId`; `status`; `scheduledAt`; `createdAt`.

#### `auditLogs`
- **Purpose**: Admin and system actions for traceability.
- **Key fields**: `actor` { `type`, `id` }, `action`, `target` { `type`, `id` }, `metadata`, `ip`, `userAgent`.
- **Indexes**: `actor.id`; `target.id`; `action`; `createdAt`.

#### `adminSettings`
- **Purpose**: Operational config (tax, store hours, feature flags).
- **Key fields**: `key` (unique), `value`, `updatedBy`, `updatedAt`.
- **Indexes**: unique on `key`.

#### `coupons` (optional)
- **Purpose**: Discounts and promotions.
- **Key fields**: `code` (unique), `discount` { `type` (`percent`|`amount`), `value` }, `conditions`, `validFrom`, `validTo`, `maxRedemptions`, `perUserLimit`, `isActive`.
- **Indexes**: unique on `code`; `isActive`; `validTo`.

#### `webhookEvents` (optional)
- **Purpose**: Raw incoming events from providers (e.g., payments).
- **Key fields**: `provider`, `eventId` (unique per provider), `type`, `payload`, `processedAt`, `error`.
- **Indexes**: unique on `{ provider, eventId }`; `type`; `processedAt`.

#### `rateLimits` (optional)
- **Purpose**: Server-side rate limiting counters.
- **Key fields**: `key`, `windowStart`, `count`, `expiresAt`.
- **Indexes**: unique on `{ key, windowStart }`; TTL on `expiresAt` (0).

### Relationships & Modeling Choices

- **Embed vs Reference**: Items and timelines embed in `orders`; `payments`/`notifications` reference orders.
- **Guest carts**: Use `sessionId`; user carts use `userId`. Both indexed.
- **Data retention**: TTL on `authTokens`, `carts`, `rateLimits`. Consider archival for `auditLogs`.
- **Search**: Text index on `menuItems` for name/description/tags.

### Docker Initialization

Use this document with the JSON schema file (`database/cookie-barrel-schema.json`) to create validators and indexes via an init script mounted into MongoDB (`/docker-entrypoint-initdb.d/`).


