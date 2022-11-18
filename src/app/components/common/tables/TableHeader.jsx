import React from "react";
import { tableColumns } from "./tableColumns.js";
import styles from "./index.module.scss";

export const TableHeader = () => {
    return (
        <thead>
            <tr className={styles.table__head_row}>
                {Object.keys(tableColumns).map(columnName => (
                    <th key={columnName}>
                        {tableColumns[columnName].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
