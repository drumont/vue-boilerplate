import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { AdminState } from './types'
import {Node} from "@/models/node/Node";

export const getters: GetterTree<AdminState, RootState> = {

    getNodes(state): Node[] | undefined{
        return state.nodes
    },

    getCreatedNodes(state): Node[] | undefined{
        return state.createdNodes
    },
};
