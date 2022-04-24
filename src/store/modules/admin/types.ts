import {Node} from '@/models/node/Node';

export interface AdminState {
    pageOptions: Record<number, unknown>,
    nodes: Node[] | undefined
    createdNodes: Node[] | undefined

}
