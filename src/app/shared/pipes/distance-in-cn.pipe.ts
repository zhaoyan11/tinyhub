import { Pipe, PipeTransform } from '@angular/core';
import { distanceInWordsToNow } from 'date-fns';

@Pipe({
  name: 'distanceInCN'
})
export class DistanceInCNPipe implements PipeTransform {

  // todo 临时hack一下，需要自己写一个中文版的distanceInWordsToNow
  transform(date: Date | string | number): any {
    const desc = distanceInWordsToNow(date);
    return this._translate(desc);
  }

  _translate(source: string): string {
    const map = {
      'less than': '不超过',
      'about': '大约',
      'over': '超过',
      'almost': '将近',
      'half': '半',
      'a ': '1',
      'minutes': '分钟',
      'minute': '分钟',
      'hours': '小时',
      'hour': '小时',
      'day': '天',
      'days': '天',
      'months': '个月',
      'month': '个月',
      'years': '年',
      'year': '年'
    };

    for (const keyword of Object.keys(map)) {
      source = source.replace(keyword, map[keyword]);
    }

    return source + '前';
  }
}
