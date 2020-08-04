import { b as bootstrapLazy } from './global-7598b9fc.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-987afaa0.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["app-root",[[1,"app-root"]]]], options);
});
