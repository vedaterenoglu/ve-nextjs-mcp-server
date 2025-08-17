import { PrismaClient } from '../generated/prisma'

export class PrismaService {
  private static instance: PrismaClient

  static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
      })
    }
    return PrismaService.instance
  }

  static async disconnect(): Promise<void> {
    if (PrismaService.instance) {
      await PrismaService.instance.$disconnect()
    }
  }
}