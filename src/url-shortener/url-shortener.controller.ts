import { Controller, Get, Param, Redirect, Post, Body } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';

@Controller()
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post('/shorten')
  async shortenUrl(
    @Body() body: { url: string },
  ): Promise<{ shortUrl: string }> {
    const shortUrl = await this.urlShortenerService.shortenUrl(body.url);
    return { shortUrl };
  }

  @Get(':shortUrl')
  @Redirect('', 301)
  async redirect(
    @Param('shortUrl') shortUrl: string,
  ): Promise<{ url: string }> {
    const url = await this.urlShortenerService.getUrl(shortUrl);
    return { url };
  }
}
