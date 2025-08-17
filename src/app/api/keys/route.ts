import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import {
  getUserApiKeys,
  createUserApiKey,
} from '@/lib/api-keys'

// GET /api/keys - List user's API keys
export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const keys = await getUserApiKeys(userId)
    return NextResponse.json(keys)
  } catch (error) {
    console.error('Error fetching API keys:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/keys - Create new API key
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { name, scopes } = await request.json()

    // Validate input
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!scopes || !Array.isArray(scopes) || scopes.length === 0) {
      return NextResponse.json(
        { error: 'At least one scope is required' },
        { status: 400 }
      )
    }

    // Validate scopes
    const validScopes = ['mcp:tools', 'mcp:resources']
    const invalidScopes = scopes.filter(scope => !validScopes.includes(scope))
    if (invalidScopes.length > 0) {
      return NextResponse.json(
        { error: `Invalid scopes: ${invalidScopes.join(', ')}` },
        { status: 400 }
      )
    }

    // Check if user already has too many keys (limit to 5)
    const userKeys = await getUserApiKeys(userId)
    if (userKeys.length >= 5) {
      return NextResponse.json(
        { error: 'Maximum number of API keys reached (5). Delete an existing key to create a new one.' },
        { status: 400 }
      )
    }

    // Check if name is already used by this user
    if (userKeys.some(key => key.name === name.trim())) {
      return NextResponse.json(
        { error: 'API key name already exists' },
        { status: 400 }
      )
    }

    // Create new API key
    const apiKey = await createUserApiKey(userId, name.trim(), scopes)

    return NextResponse.json(apiKey, { status: 201 })
  } catch (error) {
    console.error('Error creating API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
