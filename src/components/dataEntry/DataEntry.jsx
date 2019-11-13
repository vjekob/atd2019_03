import React, { PureComponent } from "react";
import styles from "./DataEntry.module.css";

export class DataEntry extends PureComponent {
    render() {
        const { entry } = this.props;
        return (
            <div className={styles.entry}>
                <div className={styles.date}>{entry.documentDate}</div>
                <div className={styles.customer}>
                    <div className={styles.no}>{entry.customerNo}</div>
                    <div className={styles.name}>{entry.customerName}</div>
                </div>
                <div className={styles.amount}>
                    <span className={styles.currency}>{entry.currency}</span>
                    <span className={styles.number}>{entry.amount}</span>
                </div>
            </div>
        );
    }
}
