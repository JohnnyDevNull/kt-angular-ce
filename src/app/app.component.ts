import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiFormComponent } from './api-form/api-form.component';
import { ApiService } from './services/api.service';
import { ApiData } from './types/api-data.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, ApiFormComponent, AsyncPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly title = 'Angular Coding Exercise';
  private readonly apiService: ApiService = inject(ApiService);

  protected getData(): Observable<ApiData> {
    return this.apiService.getData();
  }
}
