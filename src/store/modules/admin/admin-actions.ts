import { ActionTree } from 'vuex';
import { AdminState } from "./types";
import { RootState } from "@/store/types";
import { NodeService } from "@/services/node.service";
import Vue from "vue";


export const actions: ActionTree<AdminState, RootState> = {

    searchNodes(context) {
        return NodeService.getInstance('').search()
            .then(value => {
                if (value.data) {
                    context.commit("setNodes", value.data)
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
                    Vue.$toast(value.apiError.message);
                }

                if (value.data) {
                    context.commit("setCreatedNodes", value.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}
