import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(
      item => item.order_no.search(new RegExp(filterText, 'i')) > -1 || 
              item.user.search(new RegExp(filterText, 'i')) > -1 || 
              item.receiver.search(new RegExp(filterText, 'i')) > -1 || 
              item.pick_up.search(new RegExp(filterText, 'i')) > -1 || 
              item.drop_off.search(new RegExp(filterText, 'i')) > -1 ||
              item.amount.search(new RegExp(filterText, 'i')) > -1 ||
              item.status.search(new RegExp(filterText, 'i')) > -1 ||
              item.updated.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}