import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interviewStatus'
})
export class CvStatusPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let msg: string;
    switch (value) {
      case '0':
        msg = '待面试';
        break;
      case '1':
        msg = '放弃面试';
        break;
      case '2':
        msg = '申请延期';
        break;
      case '3':
        msg = '已面试';
        break;
      case '4':
        msg = '未参加';
        break;
    }
    return msg;
  }

}
