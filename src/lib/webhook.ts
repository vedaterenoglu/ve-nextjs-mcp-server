interface WebhookPayload {
  eventType: 'api_key_used' | 'api_key_created' | 'api_key_deleted' | 'api_key_updated'
  userId: string
  payload: Record<string, any>
}

export async function triggerWebhook(data: WebhookPayload): Promise<void> {
  try {
    const webhookSecret = process.env.WEBHOOK_SECRET
    if (!webhookSecret) {
      console.warn('WEBHOOK_SECRET not configured, skipping webhook')
      return
    }

    // In development, we'll call our own webhook endpoint
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXTAUTH_URL 
      : 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error('Webhook failed:', await response.text())
    }

  } catch (error) {
    console.error('Error triggering webhook:', error)
  }
}

export function createWebhookPayload(
  eventType: WebhookPayload['eventType'],
  userId: string,
  payload: Record<string, any>
): WebhookPayload {
  return {
    eventType,
    userId,
    payload: {
      ...payload,
      timestamp: new Date().toISOString(),
    },
  }
}