import type { App } from 'vue'

import MyButton from './components/my-button.vue';
import MultiLanguageInput from './components/multi-language-input.vue';
import FormInputWrapper from './components/form-input-wrapper.vue';

// Named exports (tree-shakable)
export { 
  MyButton, 
  FormInputWrapper, 
  MultiLanguageInput,
}

export type { MyButtonMessage } from './components/my-button.vue';
export type { Language } from './data/un-languages'
export type { default as LString } from './types/lstring';

// Vue plugin (global registration)
export default {
  install: (app: App) => {
    app.component('MyButton', MyButton);
    app.component('FormInputWrapper', FormInputWrapper);
    app.component('MultiLanguageInput', MultiLanguageInput);
  },
};
