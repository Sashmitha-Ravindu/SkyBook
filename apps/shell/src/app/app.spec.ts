import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the brand link to the home page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const brand = (fixture.nativeElement as HTMLElement).querySelector(
      '.brand',
    );

    expect(brand?.textContent).toContain('SkyBook');
    expect(brand?.getAttribute('href')).toBe('/');
  });

  it('provides a skip link to the main content', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.skip-link')?.getAttribute('href')).toBe(
      '#main-content',
    );
    expect(element.querySelector('main#main-content')).not.toBeNull();
  });

  it('moves focus to the main content when the skip link is clicked', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    document.body.appendChild(element);

    element.querySelector<HTMLAnchorElement>('.skip-link')?.click();

    expect(document.activeElement?.id).toBe('main-content');
    element.remove();
  });
});
