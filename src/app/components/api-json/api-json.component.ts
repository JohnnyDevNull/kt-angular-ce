import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ApiData } from '../../types/api-data.interface';

@Component({
  selector: 'app-api-json',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-json.component.html',
  imports: [JsonPipe]
})
export class ApiJsonComponent {
  public data = input<ApiData | null>(null);
}
