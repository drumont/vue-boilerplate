import {Module} from 'vuex';
import {RootState} from '@/store/types';
import {getters} from '@/store/modules/admin/admin-getters';
import {actions} from '@/store/modules/admin/admin-actions';
import {mutations} from '@/store/modules/admin/admin-mutations';
import { AdminState } from './types';

export const state: AdminState = {
    pageOptions: [10, 20, 50, 100],
    nodes: undefined,
    createdNodes: undefined
};

export const admin: Module<AdminState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
