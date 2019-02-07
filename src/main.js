require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

//pour la traduction 
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource'
Vue.use(VueResource);

import {VueTools} from 'formater-commons-components-vjs'
Vue.use(VueTools)

import FormaterGepViewer from './formater-gep-viewer.vue'
// import FormaterAttribution from './formater-attribution.vue'
// import AlertMessage from './elements/formater-alert-message.vue'
// import DoubleRange from './elements/formater-double-range.vue'
// import LanguageSwitcher from './elements/language-switcher.vue'
// import {LanguageSwitcher} from 'formater-commons-components-vjs'
// Add aeris-theme from other local repository!
// import AerisTheme from '../../aeris-commons-components-vjs/src/aeris-theme/aeris-theme.vue'



ljs.addAliases({
    dep: [
       // font-awesome
       //  'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 
       //leaflet css
       //------------
       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css',
       //regiter element
       //-------------
       'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js',
       'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js',
       'https://cdnjs.cloudflare.com/ajax/libs/moment-range/3.0.3/moment-range.min.js'
      ]
})
ljs.load('dep', function() {

//  Vue.customElement('formater-attribution', FormaterAttribution)
//  Vue.customElement('formater-alert-message', AlertMessage)
//  Vue.customElement('formater-double-range', DoubleRange)
  Vue.customElement('formater-gep-viewer', FormaterGepViewer) 
  // Vue.customElement('language-switcher', LanguageSwitcher)
})

