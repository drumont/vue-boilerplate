import { ActionTree } from 'vuex';
import { AdminState } from './types';
import { RootState } from '@/store/types';
import { NodeService } from '@/services/node.service';
import Vue from 'vue';
import {i18n} from '@/plugins/i18n';
import langHelpers from '@/helpers/lang.helpers';


export const actions: ActionTree<AdminState, RootState> = {

    searchNodes(context) {
        return NodeService.getInstance('').search()
            .then(value => {
                if (value.data) {
                    context.commit('setNodes', value.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },

    addNodes(context) {
        return NodeService.getInstance('').addNodes()
            .then(value => {
                if (value.apiError) {
                    const code = 'error_code.' + value.apiError.error_code + '.message'

                    const errors = i18n.t('errors')

                    console.log(errors)

                    const error = langHelpers.retrieveError(Object.values(errors), value.apiError.error_code)
                    const error_test = Vue.langHelpers.retrieveError(Object.values(errors), value.apiError.error_code)

                    console.log(error)
                    console.log(error_test)
                    //Vue.$toast(message);
                }
                if (value.data) {
                    context.commit('setCreatedNodes', value.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}
