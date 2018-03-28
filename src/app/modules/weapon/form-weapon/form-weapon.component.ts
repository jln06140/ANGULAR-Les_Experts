import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Weapon } from '../../../core/model';
import { WeaponService } from '../../../core/api/weapon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-weapon',
  templateUrl: './form-weapon.component.html',
  styleUrls: ['./form-weapon.component.css']
})
export class FormWeaponComponent implements OnInit {
  weapon: Weapon;
  editing: boolean;

  constructor(private weaponService: WeaponService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const urlSegment = this.route.snapshot.url[0];
    if (urlSegment && urlSegment.path === 'edit') {
      const id = +this.route.parent.snapshot.paramMap.get('id');
      this.weaponService.getWeapon(id).subscribe(
        data => this.weapon = data
      );
      this.editing = true;
    } else {
      this.editing = false;
      this.weapon = {
        createDate: '',
        type: '',
        modele: '',
        updateDate: '',
      };
    }
  }

  onSubmit(form: NgForm) {
    if (this.editing) {
      this.weaponService.updateWeapon(this.weapon).subscribe();
    } else {
     this.weaponService.createWeapon(this.weapon).subscribe();
   }
  }

  onCreate() {
    if (!this.editing) {
      this.router.navigate(['/weapons']);
    }
  }

}
