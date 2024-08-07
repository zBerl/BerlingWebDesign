import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTasks, faShoppingCart, faCreditCard, faFileAlt, faPaperPlane, faTachometerAlt, faCode, faCogs, faMobileAlt, faDesktop, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './tailwind.css';
import App from './App.svelte';

library.add(faCheckCircle, faTasks, faShoppingCart, faCreditCard, faFileAlt, faPaperPlane, faTachometerAlt, faCode, faCogs, faMobileAlt, faDesktop, faPlayCircle);

AOS.init();

const app = new App({
  target: document.getElementById('app')
});

export default app;
