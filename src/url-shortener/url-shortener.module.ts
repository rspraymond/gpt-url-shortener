import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerService } from './url-shortener.service';

@Module({
  imports: [RedisModule],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
})
export class UrlShortenerModule {}
