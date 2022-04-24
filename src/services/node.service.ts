import { HttpBaseService } from '@/services/httpBase.service';
import {ApiResponse} from '@/models/http/ApiResponse';
import { Node } from '@/models/node/Node';

export class NodeService extends HttpBaseService{

    private static classInstance?: NodeService
    static apiBaseUrl = 'https://api-cmanager.nathos.dev/api/v1/content-manager/'

    constructor(token:string) {
        super(token, NodeService.apiBaseUrl)
    }


    public static getInstance(token:string): NodeService {

        if(!this.classInstance) {
            this.classInstance = new NodeService(token)
        }

        return this.classInstance
    }


    public search() : Promise<ApiResponse<Node[]>> {

        const search = {
            navigation_path: '/mairie/services_communaux/categories/category_2',
            distance: 'one',
        }

        return this.instance.post('/content/search', search)
            .then(response => {
                const apiResponse = new ApiResponse<Node[]>();
                switch (response.status) {
                    case 200: {
                        apiResponse.data = response.data;
                        return apiResponse;
                    }
                    case 422: {
                        return apiResponse;
                    }
                    default: {
                        return apiResponse;
                    }
                }
            })
            .catch(error => {
                console.log(error)
                return new ApiResponse<Node[]>()
            });
    }

    public addNodes() : Promise<ApiResponse<Node[]>> {

        const payload = {
            'contents_requests': [
                {
                    'name': 'conten',
                    'display_name': 'string',
                    'node_type': 'content',
                    'value': {},
                    'navigation_path': '/test/content'
                }
            ]
        }

        const apiResponse = new ApiResponse<Node[]>();
        return this.instance.post('/content/create', payload)
            .then(response => {
                apiResponse.data = response.data
                return apiResponse
            })
            .catch(error => {
                apiResponse.apiError = error.response.data
                return apiResponse
            });
    }



}


