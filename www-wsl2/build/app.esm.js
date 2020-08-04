import { b as bootstrapLazy } from './index-4979cd89.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-efd41aa8.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["app-root",[[1,"app-root"]]]], options);
});
