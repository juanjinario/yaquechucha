import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disorderList'
})
export class DisorderListPipe implements PipeTransform {
  transform(list: any[], ...args: unknown[]): unknown {
    var currentIndex = list.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]];
    }

    return list;
  }
}
