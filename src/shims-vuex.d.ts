import { Store } from 'vuex';
import { Store as AppStore } from '@/store/store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<AppStore>;
  }
}
