-- CreateTable
CREATE TABLE "user_api_keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "scopes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUsed" TIMESTAMP(3),
    "totalRequests" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_key_request_logs" (
    "id" TEXT NOT NULL,
    "apiKeyId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endpoint" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,

    CONSTRAINT "api_key_request_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhook_events" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "webhook_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_api_keys_key_key" ON "user_api_keys"("key");

-- CreateIndex
CREATE INDEX "api_key_request_logs_apiKeyId_idx" ON "api_key_request_logs"("apiKeyId");

-- CreateIndex
CREATE INDEX "api_key_request_logs_timestamp_idx" ON "api_key_request_logs"("timestamp");

-- CreateIndex
CREATE INDEX "api_key_request_logs_apiKeyId_timestamp_idx" ON "api_key_request_logs"("apiKeyId", "timestamp");

-- CreateIndex
CREATE INDEX "webhook_events_userId_timestamp_idx" ON "webhook_events"("userId", "timestamp");

-- CreateIndex
CREATE INDEX "webhook_events_processed_idx" ON "webhook_events"("processed");

-- AddForeignKey
ALTER TABLE "api_key_request_logs" ADD CONSTRAINT "api_key_request_logs_apiKeyId_fkey" FOREIGN KEY ("apiKeyId") REFERENCES "user_api_keys"("id") ON DELETE CASCADE ON UPDATE CASCADE;
