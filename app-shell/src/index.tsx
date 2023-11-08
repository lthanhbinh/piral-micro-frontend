import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';
import 'vue';
import { createVueApi } from 'piral-vue';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/firstpiral';

renderInstance({
  layout,
  errors,
  plugins: [createVueApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
