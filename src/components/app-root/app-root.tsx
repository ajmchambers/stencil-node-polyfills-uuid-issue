import { Component, h } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <h2>UUID below:</h2>
          {v4()}
        </main>
      </div>
    );
  }
}
