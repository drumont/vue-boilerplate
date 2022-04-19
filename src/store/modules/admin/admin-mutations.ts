import { MutationTree } from 'vuex';
import { AdminState } from "./types";

export const mutations: MutationTree<AdminState> = {
    setNodes(state, nodes: []) {
        state.nodes = nodes
    },

    setCreatedNodes(state, nodes: []) {
        state.nodes = nodes
    },
};
