import React, { PureComponent } from "react";
import styles from "./DataContainer.module.css";
import { DataEntry } from "../dataEntry/DataEntry";

export class DataContainer extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <div className={styles.data}>
                {
                    data.map(entry => (
                        <DataEntry
                            entry={entry}
                            key={entry.entryNo} />
                    ))
                }
            </div>
        );
    }
}
