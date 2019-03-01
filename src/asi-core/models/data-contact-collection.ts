import { DataContract } from "./data-contract";

export abstract class DataContractCollection extends DataContract {
    public $values: DataContract[];
}
