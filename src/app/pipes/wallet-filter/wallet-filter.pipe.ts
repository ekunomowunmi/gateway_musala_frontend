import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletFilter'
})
export class WalletFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(
      item => item.transaction_id.search(new RegExp(filterText, 'i')) > -1 || 
              item.date.search(new RegExp(filterText, 'i')) > -1 || 
              item.narration.search(new RegExp(filterText, 'i')) > -1 || 
              item.amount.search(new RegExp(filterText, 'i')) > -1 ||
              item.status.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
