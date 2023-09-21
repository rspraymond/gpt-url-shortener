import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class UrlShortenerService {
  constructor(private readonly redisService: RedisService) {}

  async shortenUrl(url: string): Promise<string> {
    const shortUrl = nanoid(6);
    await this.redisService.set(shortUrl, url);
    return shortUrl;
  }

  async getUrl(shortUrl: string): Promise<string | null> {
    return this.redisService.get(shortUrl);
  }
}
