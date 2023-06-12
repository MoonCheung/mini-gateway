import { Injectable } from '@nestjs/common';

import { WebSiteDataModel } from './types';
import { getMatchedSync } from './intercepter';
import { ConfigService } from '@nestjs/config';
import * as WebsitesMock from './websites_mock.json';
import * as FilesMock from './files_mock.json';

@Injectable()
export class IntercepterService {
  constructor() { }

  get websites(): Record<string, WebSiteDataModel> {
    return WebsitesMock as Record<string, WebSiteDataModel>
  }

  async readHtml(urlObj: URL) {
    const { data: matchedData } = getMatchedSync(urlObj, this.websites);
    if (!matchedData) return null
    const html = FilesMock[matchedData.pageId]
    return html;
  }
}
