import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilterPipe'
})
export class NameFilterPipe implements PipeTransform {

  transform(players: any, searchText: any): any {
    if (searchText == null)
      return players;
    return players.filter(function (players) {
      return players.playerName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
