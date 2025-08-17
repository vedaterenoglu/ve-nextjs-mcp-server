/*
  Warnings:

  - Added the required column `userId` to the `api_key_request_logs` table without a default value. This is not possible if the table is not empty.

*/
-- Step 1: Add the userId column as nullable first
ALTER TABLE "api_key_request_logs" ADD COLUMN "userId" TEXT;

-- Step 2: Populate userId from the related API key
UPDATE "api_key_request_logs" 
SET "userId" = (
  SELECT "userId" 
  FROM "user_api_keys" 
  WHERE "user_api_keys"."id" = "api_key_request_logs"."apiKeyId"
);

-- Step 3: Make the column NOT NULL now that it's populated
ALTER TABLE "api_key_request_logs" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "api_key_request_logs_userId_idx" ON "api_key_request_logs"("userId");

-- CreateIndex
CREATE INDEX "api_key_request_logs_userId_timestamp_idx" ON "api_key_request_logs"("userId", "timestamp");
