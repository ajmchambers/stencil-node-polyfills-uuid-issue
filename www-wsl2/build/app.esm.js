import { b as bootstrapLazy } from './index-b72f4a72.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-94b67c58.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["app-root",[[1,"app-root"]]]], options);
});
