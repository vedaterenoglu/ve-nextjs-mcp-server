export interface ApiKey {
  id: string
  name: string
  key: string
  createdAt: string
  lastUsed?: string
  scopes: string[]
}

export interface ApiKeyScope {
  id: string
  label: string
  description: string
}
