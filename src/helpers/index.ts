import Vue from 'vue'
import langHelpers from '@/helpers/lang.helpers';

export default {
    install: function () {
        Vue.prototype.langHelpers = langHelpers
        Vue.langHelpers = langHelpers
    }
}

