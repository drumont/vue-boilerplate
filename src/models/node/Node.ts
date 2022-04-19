
export interface Node {
    node_id?: string,
    name: string,
    display_name: string,
    node_type: DataType,
    value: any,
    children?: []
    navigation_path: string

    created_at?: string,
    created_by?: string,
}

export enum DataType {
    content = 'content',
    article = 'article',
    media = 'media',
}
