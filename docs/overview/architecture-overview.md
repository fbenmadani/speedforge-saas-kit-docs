---
sidebar_position: 4 
---

# Architecture Overview

## 1. Overview

Speed Forge Saas Kit is a free and open-source, batteries-included multitenant SaaS starter kit built on Laravel 13, Livewire 4, Tailwind CSS, Alpine.js, and Flux UI, with multi-database tenancy powered by Tenancy for Laravel (stancl/tenancy). The goal is to reduce the time required to launch a modern Laravel SaaS by solving the difficult parts up front: central user identity, subdomain-based tenant identification, per-tenant databases, plan-aware billing foundations, and admin control surfaces.

## 2. Tech Stack
 Laravel 13 + Livewire 4 + Tailwind + Alpine.js + Flux UI + stancl/tenancy
 

### 2.1 Architecture Decisions


| Decision | Chosen Approach | Status |
|---|---|---|
| Frontend stack | Laravel 13 + Livewire 4 + Tailwind + Alpine.js + Flux UI | ✅ Implemented |
| Tenancy model | Multi-database (stancl/tenancy) | ✅ Implemented |
| Tenant identification | Subdomain via `InitializeTenancyBySubdomain` | ✅ Implemented |
| Identity source of truth | Central `users` table | ✅ Implemented |
| Admin role | `is_admin` boolean flag on `users` | ✅ Implemented |
| Auth backend | Laravel Fortify (login, register, 2FA, password reset, email verification) | ✅ Implemented |
| Billing owner | Tenant (not individual user) | 🔲 Planned |
| Billing engine | Provider-agnostic abstraction (Stripe-first) | 🔲 Planned |
| API layer | Central + Tenant REST API | 🔲 Planned |