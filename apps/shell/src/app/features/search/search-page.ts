import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sb-search-page',
  template: `
    <h1>Search flights</h1>
    <p>Find a flight to start your booking.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {}
