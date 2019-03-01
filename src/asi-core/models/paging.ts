import { DataContract } from './data-contract';

export interface ITypedPagedResult<T extends DataContract> extends IPagedResultBase<T> {
}

export interface IPagedResult extends IPagedResultBase<any> {
}

export interface IPagedResultBase<T> {
    Count: number;
    HasNext: boolean;
    Items: ItemValues<T>;
    Limit: number;
    NextOffset: number;
    Offset: number;
    TotalCount: number;
}

export interface ItemValues<T> {
    $values: T[];
}