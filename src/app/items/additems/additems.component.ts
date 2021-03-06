import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

export interface Types {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})


export class AdditemsComponent implements OnInit {
  itemForm: FormGroup;
  item_available_at: Types[] = [
    { value: '0', viewValue: 'Morning' },
    { value: '1', viewValue: 'AfterNoon' },
    { value: '2', viewValue: 'Night' },
    { value: '3', viewValue: 'Evening' },
  ];
  constructor(private router: Router, private itemservice: ItemService, private route: ActivatedRoute, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
  }
  itemid = this.route.snapshot.paramMap.get('id');
  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      item_id: new FormControl('', [Validators.required]),
      item_name: new FormControl('', [Validators.required]),
      item_description: new FormControl('', [Validators.required]),
      item_available_at: new FormControl('', [Validators.required]),
      item_type: new FormControl('', [Validators.required]),
      item_price: new FormControl('', [Validators.required]),
      item_image: new FormControl('', [Validators.required]),
    });
    if (this.itemid != null) {
      this.itemservice.getItemBelongsToVendor(this.itemid).subscribe((res: any[]) => {
        console.log(res);
        this.itemForm.patchValue({
          item_id: res['item_id'],
          item_name: res['item_name'],
          item_description: res['item_description'],
          item_available_at: res['item_available_at'],
          item_type: res['item_type'],
          item_price: res['item_price'],
          //  item_description: res['item_description']
        })
      })
    }
  }
  get vif() { return this.itemForm.controls; }
  onFormSubmit(form: NgForm) {
    if (this.itemid != null) {
      this.itemservice.updateItem(this.itemid, form)
        .subscribe(res => {
          let config = new MatSnackBarConfig();
          config.duration = 5000;
          config.panelClass = ['success-snackbar'];
          config.verticalPosition = 'top';
          this.snackBar.open('Successfully updated!!!', null, config);
        }, (err) => {
          console.log(err);
        });
    }
    else {
      this.itemservice.createItem(form)
        .subscribe(res => {
          let id = res['_id'];
          let config = new MatSnackBarConfig();
          config.duration = 5000;
          config.panelClass = ['success-snackbar'];
          config.verticalPosition = 'top';
          this.snackBar.open('Successfully added!!!', null, config);
        }, (err) => {
          console.log(err);
        });
    }
  }
}
