import { Injectable } from '@angular/core';
import { Case } from '../model/case';

@Injectable()
export class AffaireService {
  selectedAffaire: Case;

  // USER TESTING
   simulatedData: Case[] = [
    {id: 1,
      date: '21/05/2017',
      name: 'Roswell',
      description: 'crash d\'un ballon sonde',
      listComment: [],
      listUser: [],
      listPhoto: [],
      listPoE: [],
      listVictim: [],
      listSuspect: [],
      listWitness: [],
      listWeapon: [
        {id: 1,
          date: '21/07/2016',
          name: 'Desert Eagle',
          brand: 'brand',
          serial: '12387AZ6',
          description: 'arme trouvé dans un tiroir',
          listComment: [],
          listPhoto: [],
          listCase: [],
          listTag: [], }
      ],
      listVehicule: [],
      listTag: [],
      },
      {id: 2,
        date: '21/05/2017',
        name: 'Kennedy',
        description: 'crash d\'un ballon sonde',
        listComment: [],
        listUser: [],
        listPhoto: [],
        listPoE: [],
        listVictim: [],
        listSuspect: [],
        listWitness: [],
        listWeapon: [],
        listVehicule: [],
        listTag: [],
        },
  ];

  constructor() { }

  selectAffaire(row) {
    this.selectedAffaire = row;
  }

}

/*
{id: 1,
  date: '21/05/1983',
 text : 'message 1',
  user: ['Gérôme', 'Grignon', 'ggrignon', 'password',
        [1, '', '', '', [], '', [], []],
},
{id: 1,
  date: '21/05/1983',
 text : 'message 1',
  user: ['Gérôme', 'Grignon', 'ggrignon', 'password',
        [1, '', '', '', [], '', [], []],
},
*/
