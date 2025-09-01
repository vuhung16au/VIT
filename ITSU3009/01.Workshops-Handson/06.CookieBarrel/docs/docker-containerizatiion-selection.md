# Docker Containerization Selection

This document explains which components of the project will be containerized using Docker, and which will not, along with the reasoning behind each decision.

## Will Be Containerized

### 1. Next.js
- **Reason:** It is a Node.js-based web application that can be easily containerized for consistent development and deployment environments.

### 2. Express.js
- **Reason:** As a backend Node.js service, Express.js is well-suited for containerization, allowing for isolated and reproducible environments.

### 3. MongoDB
- **Reason:** MongoDB is commonly run in a container for local development, making setup and teardown easy and avoiding conflicts with host installations.

## Will NOT Be Containerized

### 1. React Native
- **Reason:** React Native development relies on host-native tools (Xcode, Android SDK, device simulators, hardware acceleration) that do not work well inside containers. It is best to run React Native tooling directly on the host machine.

### 2. Stripe
- **Reason:** Stripe is a managed SaaS service. For local development, use the Stripe CLI to forward webhooks to your local backend. There is no need to run Stripe in a container.

### 3. WhatsApp API
- **Reason:** Most projects use Meta's Cloud API, which is a managed service. Only containerize if you are explicitly running the on-premises WhatsApp Business API (rare and requires special approval). For most development, use the cloud API and expose your local webhook endpoint using a tool like ngrok.

### 4. FCM (Firebase Cloud Messaging)
- **Reason:** FCM is a managed Firebase service. There is no official emulator for FCM, so you should use real device tokens or test via the Firebase Console. No container is needed.

## Summary Table

| Component      | Containerized | Reason                                                                 |
|---------------|:-------------:|------------------------------------------------------------------------|
| Next.js       |     Yes       | Standard Node.js app, easy to containerize                             |
| Express.js    |     Yes       | Standard Node.js backend, easy to containerize                         |
| MongoDB       |     Yes       | Commonly containerized for local dev                                   |
| React Native  |      No       | Requires host-native tools, not suitable for containers                 |
| Stripe        |      No       | Managed SaaS, use Stripe CLI for webhooks                              |
| WhatsApp API  |      No*      | Use Cloud API; only containerize on-premises API (rare)                |
| FCM           |      No       | Managed service, no emulator available                                 |

*Only containerize WhatsApp API if you are running the on-premises Business API, which is uncommon for most development workflows.
