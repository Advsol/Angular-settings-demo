export abstract class DataContract {
    /* public static so we don't pollute public properties of DataContracts */
    public static GetApiUrl(contract: DataContract): string {
        const matchResouce = contract.$type.match(/^\s*[a-zA-Z.]+\.([a-zA-Z]+)Data\s*,[^,]*$/);
        if (matchResouce === null || matchResouce.length !== 2) {
            throw new TypeError(`Could not extract api path from string '${contract.$type}'`);
        }
        return matchResouce[1];
    }

    public abstract $type: string;
}
