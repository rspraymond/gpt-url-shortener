// src/redis/redis.service.ts

import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: 'localhost', // Replace with your Redis server host
      port: 6379, // Replace with your Redis server port
      password: 'your-redis-password', // Replace with your Redis server password if applicable
    });
  }

  async set(key: string, value: string): Promise<'OK'> {
    return await this.redisClient.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  // Add more methods as needed for your specific use case
}
