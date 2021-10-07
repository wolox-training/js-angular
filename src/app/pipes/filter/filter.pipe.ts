import { Pipe, PipeTransform } from '@angular/core';

/* Types */
export type fnSearcher = (item: any) => boolean

/* Defaults functions */
function fnDefault(searcher: string): fnSearcher {
  return function (item) {
    return JSON.stringify(item).includes(searcher)
  }
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searcher: string, fn = fnDefault): any[] {
    if (searcher === '') {
      return items
    }
    const fnFilter = fn(searcher)
    return items.filter(fnFilter)
  }
}
