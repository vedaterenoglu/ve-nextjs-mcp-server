import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { findUserApiKey, deleteUserApiKey, updateUserApiKey } from '@/lib/api-keys'

// DELETE /api/keys/[keyId] - Revoke specific API key
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { keyId } = await params

    if (!keyId) {
      return NextResponse.json({ error: 'Key ID is required' }, { status: 400 })
    }

    // Delete the API key
    const success = await deleteUserApiKey(keyId, userId)

    if (!success) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 })
    }
    return NextResponse.json({
      success: true,
      message: 'API key revoked successfully',
    })
  } catch (error) {
    console.error('Error revoking API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET /api/keys/[keyId] - Get specific API key details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { keyId } = await params

    if (!keyId) {
      return NextResponse.json({ error: 'Key ID is required' }, { status: 400 })
    }

    // Find the API key
    const apiKey = await findUserApiKey(keyId, userId)

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 })
    }

    return NextResponse.json(apiKey)
  } catch (error) {
    console.error('Error fetching API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/keys/[keyId] - Update API key (name, etc.)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { keyId } = await params
    const { name } = await request.json()

    if (!keyId) {
      return NextResponse.json({ error: 'Key ID is required' }, { status: 400 })
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Valid name is required' }, { status: 400 })
    }

    // Update the API key
    const updatedKey = await updateUserApiKey(keyId, userId, { name: name.trim() })

    if (!updatedKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'API key updated successfully',
      apiKey: updatedKey
    })

  } catch (error) {
    console.error('Error updating API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
