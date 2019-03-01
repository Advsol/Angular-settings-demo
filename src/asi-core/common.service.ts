import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { DataContract  } from './models/data-contract';
import { ITypedPagedResult  } from './models/paging';

export abstract class CommonService {
  public anything = "hi";

    constructor(private _http: HttpClient) {
    }

        public single<T extends DataContract>(dataCtor: { new (): T }, params?: HttpParams): Observable<T> {
        const contract = new dataCtor();
        // have to instantiate to get access to instance var $type
        // TODO - add paging, allow func to be passed in for custom mapping
        return this._http.get(
            `api/${DataContract.GetApiUrl(contract)}`,
            { params: params })
            .pipe(
                filter((pagedResult: ITypedPagedResult<T>) => {
                    return pagedResult ? true : false;
                }),
                map((pagedResult: ITypedPagedResult<T>) => {
                    return pagedResult.Items.$values[0] as T;
                })
            )as Observable<T>;
        // TODO error handling
        }

    /**
     * Description of what this does
     *
     * @param {string} resource The datacontract name minus the 'data' suffix
     * @param {UrlParams} params ? params
     * @param {Function} map per result object mapping operation
     * @example
     * An example of how to use this 
     */
    public find<T extends DataContract>(dataCtor: { new (): T }, params?: HttpParams, customMap?: ((item: T) => T)): Observable<T[]> {
        const contract = new dataCtor();
        return this._http.get(
                `api/${DataContract.GetApiUrl(contract)}`,
                { params: params })
            .pipe(
                map((pagedResult: ITypedPagedResult<T>) => {
                    const result: T[] = [];
                    if (pagedResult) {
                        pagedResult.Items.$values.forEach((innerItem: T) => {
                            if (customMap === undefined) {
                                customMap = (item) => item;
                            }
                            result.push(customMap(innerItem));
                        });
                    }
                    return result;
                })
            );
        // TODO error handling
    }

    public add<T extends DataContract>(payload: T): Observable<T> {
        return this._http.post(
            `api/${DataContract.GetApiUrl(payload)}`,payload).pipe(map(x => x as T));
    }

    public update<T extends DataContract>(dataCtor: { new (): T }, id: string, payload: T): Observable<T> {
        const contract = new dataCtor();
        return this._http.put(
            `api/${DataContract.GetApiUrl(contract)}/${id}`,payload).pipe(map(x => x as T));
    }
}
