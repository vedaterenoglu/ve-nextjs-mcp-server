# Neon PostgreSQL Setup Guide

## Step 1: Create Neon Account and Database

1. **Go to Neon Console**: Visit [https://neon.tech](https://neon.tech)
2. **Sign up/Login** with your GitHub account
3. **Create a new project**:
   - Name: `mcp-server-db`
   - Region: Choose closest to your location
   - PostgreSQL Version: Latest (16.x)

## Step 2: Get Connection String

1. In your Neon dashboard, go to **Connection Details**
2. Copy the **Pooled connection** string (for DATABASE_URL)
3. Copy the **Direct connection** string (for DIRECT_URL)

## Step 3: Update Environment Variables

Replace the values in your `.env` file:

```bash
# Database - Neon PostgreSQL
DATABASE_URL="postgresql://username:password@ep-example.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://username:password@ep-example.neon.tech/neondb?sslmode=require"

# Webhook Configuration
WEBHOOK_SECRET="generate-a-secure-random-string-here"
NEXT_PUBLIC_WS_URL="ws://localhost:3000"
```

## Step 4: Run Migrations

```bash
# Generate new migration for PostgreSQL
npx prisma migrate dev --name switch-to-postgresql

# Generate Prisma client
npx prisma generate
```

## Step 5: Verify Connection

```bash
# Test database connection
npx prisma db push
```

## Benefits of Neon PostgreSQL

✅ **Serverless**: Auto-scaling and hibernation  
✅ **Branching**: Git-like database branches  
✅ **High Performance**: Optimized for modern apps  
✅ **Production Ready**: Enterprise-grade reliability  
✅ **Real-time**: Perfect for webhooks and live updates  

## Webhook Features

The new setup includes:
- Real-time dashboard updates
- WebSocket connections for live data
- Webhook event tracking
- Automatic analytics refresh