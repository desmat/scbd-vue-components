import type { App } from 'vue'

import ExampleButton from './components/example-button.vue'; // example component that has assets
import MultiLanguageInput from './components/multi-language-input.vue';
import FormInputWrapper from './components/form-input-wrapper.vue';
import DateInput from './components/date-input.vue';
import DateRangeInput from './components/date-range-input.vue';
import DatetimeInput from './components/datetime-input.vue';
import DatetimeRangeInput from './components/datetime-range-input.vue';

// Named exports (tree-shakable)
export {
  ExampleButton,
  FormInputWrapper,
  MultiLanguageInput,
  DateInput,
  DateRangeInput,
  DatetimeInput,
  DatetimeRangeInput,
}

export type { ExampleButtonMessage } from './components/example-button.vue';
export type { Language } from './data/un-languages'
export type { default as LString } from './types/lstring';

// Vue plugin (global registration)
export default {
  install: (app: App) => {
    app.component('ExampleButton', ExampleButton);
    app.component('FormInputWrapper', FormInputWrapper);
    app.component('MultiLanguageInput', MultiLanguageInput);
    app.component('DateInput', DateInput);
    app.component('DateRangeInput', DateRangeInput);
    app.component('DatetimeInput', DatetimeInput);
    app.component('DatetimeRangeInput', DatetimeRangeInput);
  },
};
