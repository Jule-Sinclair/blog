import * as React from 'react';
import { render } from 'react-dom';

import { App } from 'app/App';
import { store } from 'app/store';
import { LoadEvent } from 'app/types';

// Initialize User State
window.addEventListener('pageLoad', (event: LoadEvent) => {
  const { targetElementId } = event.detail;
  render(
    <App store={store} />,
    document.getElementById(targetElementId),
  );
});
