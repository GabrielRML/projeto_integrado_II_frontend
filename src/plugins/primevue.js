import "primevue/resources/themes/aura-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

import ptBr from './primelocale/pt-br.json' 

// plugins/primevue.js
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputMask from 'primevue/inputmask';
import SelectButton from 'primevue/selectbutton';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Textarea from "primevue/textarea";

export default (app) => {
  app.use(PrimeVue, {
    locale: ptBr['pt-br'],
  });

  // Registrar componentes globalmente
  app.component('Button', Button);
  app.component('InputText', InputText);
  app.component('InputMask', InputMask);
  app.component('FloatLabel', FloatLabel);
  app.component('Calendar', Calendar);
  app.component('Dropdown', Dropdown);
  app.component('Password', Password);
  app.component('SelectButton', SelectButton);
  app.component('Stepper', Stepper);
  app.component('StepperPanel', StepperPanel);
  app.component('Textarea', Textarea);
};
