import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ApiData } from '../types/api-data.interface';

@Component({
  selector: 'app-api-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-form.component.html',
  imports: [ ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatInputModule, MatCheckboxModule ]
})
export class ApiFormComponent implements OnInit {
  public data = input<ApiData | null>(null);

  private readonly fb = inject(FormBuilder);
  protected form!: FormGroup;

  ngOnInit(): void {
    const data = this.data();
    this.form = this.fb.group({
      a: [data?.a || ''],
      b: [data?.b || null],
      c: [data?.c || ''],
      e: [data?.d?.e || ''],
      i: [data?.d?.f?.g?.h?.i || ''],
      j: [data?.d?.f?.g?.h?.j || null],
      k: [data?.d?.f?.g?.h?.k || null],
      l: [data?.d?.f?.g?.h?.l || '']
    });
  }
}
