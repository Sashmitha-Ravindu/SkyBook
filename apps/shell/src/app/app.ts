import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sb-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  /** Moves focus without a navigation, which a fragment href would trigger under `<base href="/">`. */
  protected skipTo(event: Event, target: HTMLElement): void {
    event.preventDefault();
    target.focus();
  }
}
