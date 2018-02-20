import { Injectable } from '@angular/core';
import { Case } from '../model/case';

@Injectable()
export class AffaireService {

// sélecteur pour navigation inter component
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
      listPoE: [
        {id: 1,
          date: '12/04/2010',
          name: 'chiffon ensanglanté',
          description: 'trouvé sur le lit',
          listComment: [],
          listPhoto: [],
          listCase: [],
          listTag: [], }
      ],
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
      listVehicule: [
        {id: 1,
          date: '04/08/2014',
          name: '308',
          brand: 'Peugeot',
          color: 'bleu',
          licensePlate: 'XS-762-LI',
          description: 'voiture brûlée',
          listComment: [],
          listPhoto: [],
          listCase: [],
          listTag: [], },
          {id: 1,
            date: '04/08/2014',
            name: 'Twingo',
            brand: 'Renault',
            color: 'bleu',
            licensePlate: 'XS-762-LI',
            description: 'voiture brûlée',
            listComment: [],
            listPhoto: [],
            listCase: [],
            listTag: [], },
            {id: 1,
              date: '04/08/2014',
              name: 'XS300',
              brand: 'Peugeot',
              color: 'bleu',
              licensePlate: 'XS-762-LI',
              description: 'voiture brûlée',
              listComment: [],
              listPhoto: [],
              listCase: [],
              listTag: [], },
              {id: 1,
                date: '04/08/2014',
                name: 'XS300',
                brand: 'Peugeot',
                color: 'bleu',
                licensePlate: 'XS-762-LI',
                description: 'voiture brûlée',
                listComment: [],
                listPhoto: [],
                listCase: [],
                listTag: [], },
      ],
      listTag: [],
      }
  ];

  constructor() { }

  selectAffaire(row) {
    this.selectedAffaire = row;
  }

}
