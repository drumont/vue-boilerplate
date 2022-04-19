import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";

export abstract class HttpBaseService {
    protected instance: AxiosInstance
    protected token: string
    protected readonly baseUrl: string

    protected constructor(token: string, baseUrl: string) {
        this.baseUrl = baseUrl;
        this.instance = axios.create({
            baseURL: baseUrl,

        });
        this.token = token;

        this.initializeRequestInterceptor();
        this.initializeResponseInterceptor();
    }

    private initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(this.handleRequest);
    };

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            response => {
                // if (response.headers && response.headers.authorization) {
                //     const responseToken = (response.headers.authorization as string).split(' ')[1];
                //     this.token = responseToken;
                //     console.log('hashToken ' + this.token)
                //     //localStorage.setItem('hashToken', this.token);
                // }
                return response;
            },
            error => {
                return Promise.reject(error)
            }
        );
    }

    private handleRequest = (config: AxiosRequestConfig) => {
        //config.headers['Authorization'] = `Bearer ${this.token}`;
        if (config.headers) {
            config.headers['Authorization'] = `Bearer XXXXXXXXXXXXXXX`;
        }
        return config;
    };

    private handleError = async (error: AxiosError) => {
        const originalRequest = error.config;
        if (error.response?.status === 401) {
            // const refreshToken = await this.refreshToken();
            // if (refreshToken.status === 200) {
            //     this.token = refreshToken.data.hashToken;
            //     localStorage.setItem('hashToken', this.token);
            //     return this.instance(originalRequest);
            // }
        }

    }

}
