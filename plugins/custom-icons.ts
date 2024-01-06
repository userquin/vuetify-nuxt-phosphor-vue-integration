import PhosphorIcons from '@phosphor-icons/vue';
import { aliases, phosphor } from '../phosphor';

export default defineNuxtPlugin((nuxtApp) => {
  //const phosphorIconsPomise = import('@phosphor-icons/vue');
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    /*vuetifyOptions.icons = vuetifyOptions.icons ?? {};
    vuetifyOptions.icons.defaultSet = 'custom';
    vuetifyOptions.icons.sets = vuetifyOptions.icons.sets ?? {};

    vuetifyOptions.icons.aliases = aliases;

    vuetifyOptions.icons.sets.custom = phosphor;*/
    vuetifyOptions.icons = {
      defaultSet: 'phosphor',
      aliases,
      sets: { phosphor },
    };
  });
  nuxtApp.hook('vuetify:ready', () => {
    //console.log(vuetify.icons.sets['custom']);
    //const PhosphorIcons = await phosphorIconsPomise;
    nuxtApp.vueApp.use(PhosphorIcons);
  });
});
