import { rm } from 'fs/promises';
import { resolve } from 'path';

(function() {
  const backgroundDelete = rm(resolve(process.cwd(), 'dist/assets/background.js'));
  const popupDelete = rm(resolve(process.cwd(), 'dist/src'), { recursive: true, force: true });

  Promise.all([backgroundDelete, popupDelete])
    .then(() => console.log('Post build cleanup complete'))
    .catch((err) => console.error(err));
})();
