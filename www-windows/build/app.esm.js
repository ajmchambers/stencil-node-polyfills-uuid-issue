import { b as bootstrapLazy } from './global-bed5172d.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-0f46edaa.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["app-root",[[1,"app-root"]]]], options);
});
