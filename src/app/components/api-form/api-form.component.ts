import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ApiData } from '../../types/api-data.interface';
import { flattenObject } from '../../util/flatten-object.function';

@Component({
  selector: 'app-api-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-form.component.html',
  imports: [ ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatInputModule, MatCheckboxModule ]
})
export class ApiFormComponent implements OnInit {
  public data = input<ApiData | null>(null);

  protected formKeys: string[] = [];
  protected formObject: any | null = null;
  protected form: FormGroup | null = null;

  ngOnInit(): void {
    const data = this.data();
    const group: any = {};

    this.formObject = flattenObject(data);
    this.formKeys = Object.keys(this.formObject);

    for(const key of this.formKeys) {
      group[key] = new FormControl(this.formObject[key], Validators.required);
    }

    this.form = new FormGroup(group);
  }

  getInputType(formKey: string) {
    switch (typeof this.formObject[formKey]) {
      case 'string':
        return 'text';
      case 'number':
        return 'number';
      case 'boolean':
        return 'checkbox';
      default:
        return 'text';
    }
  }
}
