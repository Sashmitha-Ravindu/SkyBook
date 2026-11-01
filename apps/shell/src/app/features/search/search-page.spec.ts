import { TestBed } from '@angular/core/testing';
import { SearchPage } from './search-page';

describe('SearchPage', () => {
  it('renders the page heading', async () => {
    const fixture = TestBed.createComponent(SearchPage);
    await fixture.whenStable();
    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');

    expect(heading?.textContent).toBe('Search flights');
  });
});
