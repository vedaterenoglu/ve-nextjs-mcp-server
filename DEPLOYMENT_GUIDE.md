# 🚀 Production Deployment Guide with Neon PostgreSQL & Webhooks

## ✅ **What We've Implemented**

### **Production-Ready Features:**
- **🐘 Neon PostgreSQL** - Serverless PostgreSQL for production
- **🔄 Auto-Refresh Dashboard** - Updates every 5 seconds automatically
- **📡 Webhook System** - Real-time event tracking
- **⚡ Performance Optimized** - Efficient database queries and indexing

### **Real-Time Features:**
- Dashboard auto-refreshes when API keys are used
- Manual refresh button for instant updates
- Webhook events for all API key operations
- Production-ready database with proper indexing

---

## 📋 **Step-by-Step Setup**

### **Step 1: Set Up Neon PostgreSQL**

1. **Create Account**: Go to [neon.tech](https://neon.tech) and sign up
2. **Create Project**:
   - Project name: `mcp-server-production`
   - Region: Choose closest to your deployment
   - PostgreSQL version: 16.x (latest)

3. **Get Connection Strings**:
   - Copy **Pooled connection** (for DATABASE_URL)
   - Copy **Direct connection** (for DIRECT_URL)

### **Step 2: Update Environment Variables**

```bash
# Update your .env file with real Neon URLs:
DATABASE_URL="postgresql://username:password@ep-xxx.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://username:password@ep-xxx.neon.tech/neondb?sslmode=require"

# Generate a secure webhook secret:
WEBHOOK_SECRET="$(openssl rand -base64 32)"

# Update other variables:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-real-clerk-key"
CLERK_SECRET_KEY="your-real-clerk-secret"
```

### **Step 3: Run Database Migration**

```bash
# Install dependencies if needed
npm install

# Run Prisma migration to PostgreSQL
npx prisma migrate dev --name "migrate-to-postgresql"

# Generate updated Prisma client
npx prisma generate

# Verify connection
npx prisma db push
```

### **Step 4: Test the Setup**

```bash
# Start development server
npm run dev

# Test webhook endpoint
curl -X POST http://localhost:3000/api/webhook \
  -H "Authorization: Bearer $(grep WEBHOOK_SECRET .env | cut -d'=' -f2 | tr -d '"')" \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "api_key_used",
    "userId": "test-user",
    "payload": {"test": true}
  }'

# Should return: {"success": true, "message": "Webhook processed successfully"}
```

---

## 🔄 **Auto-Refresh Features**

### **Dashboard Updates:**
- ✅ **Every 5 seconds** - Automatic data refresh
- ✅ **Manual refresh** - Click refresh button anytime  
- ✅ **Real-time stats** - Request counters update live
- ✅ **Smart polling** - Only when tab is active

### **Webhook Events Tracked:**
- `api_key_used` - When API key validates a request
- `api_key_created` - When new API key is generated
- `api_key_deleted` - When API key is removed

---

## 🧪 **Testing Real-Time Updates**

### **Test 1: Create API Key**
1. Open dashboard at `http://localhost:3000/dashboard`
2. Click "Create New Key"
3. Watch stats update automatically

### **Test 2: API Key Usage**
```bash
# Get your real API key from dashboard, then:
curl -X POST http://localhost:3000/api/test-request \
  -H "Authorization: Bearer YOUR_REAL_API_KEY" \
  -H "Content-Type: application/json"

# Watch dashboard - request counters should increment within 5 seconds
```

### **Test 3: Manual Refresh**
1. Click the "Refresh" button in dashboard header
2. Data should update immediately

---

## 🚀 **Production Deployment**

### **For Vercel:**
```bash
# Set environment variables in Vercel dashboard:
DATABASE_URL="your-neon-pooled-connection"
DIRECT_URL="your-neon-direct-connection"
WEBHOOK_SECRET="your-secure-secret"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-key"
CLERK_SECRET_KEY="your-clerk-secret"

# Deploy:
vercel --prod
```

### **For Other Platforms:**
1. Set all environment variables
2. Run `npm run build`
3. Deploy the built application

---

## 📊 **Database Performance**

### **Optimizations Added:**
- Composite indexes for faster queries
- JSON columns for flexible webhook payloads
- Proper foreign key relationships
- Automatic cleanup of old webhook events

### **Monitoring:**
```bash
# Check database performance in Neon dashboard
# Monitor query performance and connection pooling
# Set up alerts for high usage
```

---

## 🔧 **Troubleshooting**

### **Common Issues:**

**Database Connection Failed:**
```bash
# Test connection:
npx prisma db push
# Check environment variables are correct
```

**Auto-refresh Not Working:**
- Check browser console for errors
- Verify API endpoints are responding
- Check network tab for failed requests

**Webhook Events Not Triggering:**
```bash
# Test webhook endpoint directly:
curl -X GET "http://localhost:3000/api/webhook?userId=test&limit=5"
```

---

## 🎯 **What's Next**

Your application now has:
- ✅ Production-ready PostgreSQL database
- ✅ Real-time dashboard updates
- ✅ Webhook event system
- ✅ Auto-refresh functionality
- ✅ Manual refresh capability

The dashboard will now automatically update when:
- New API keys are created
- API keys are used for requests
- API keys are deleted
- Every 5 seconds (automatic polling)

**🎉 Your MCP server is now production-ready with real-time capabilities!**