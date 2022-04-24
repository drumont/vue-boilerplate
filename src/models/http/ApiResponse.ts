
export class ApiResponse<T> {
    private _data?: T ;
    private _apiError?: ApiError ;


 /*   constructor() {
    }*/

    get data(): T | undefined {
        return this._data;
    }

    set data(value: T | undefined) {
        this._data = value;
    }

    get apiError(): ApiError | undefined{
        return this._apiError;
    }

    set apiError(value: ApiError | undefined) {
        this._apiError = value;
    }
}

export interface ApiError {
    error_code: number
    message: string
}
