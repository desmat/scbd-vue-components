// import type { App } from 'vue';

export { default as MyButton } from './components/my-button.vue';
export type { MyButtonMessage } from './components/my-button.vue';

export { default as FormInputWrapper } from './components/form-input-wrapper.vue';

export { default as MultiLanguageInput } from './components/multi-language-input.vue';
export type { Language } from './data/un-languages'
export type { default as LString } from './types/lstring';

// Option 2: Vue plugin for global registration
// export default {
//   install: (app: App) => {
//     app.component('MyButtonMessage', MyButtonMessage);
//   },
// };
