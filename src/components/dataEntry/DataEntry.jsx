import React, { PureComponent } from "react";
import styles from "./DataEntry.module.css";

export class DataEntry extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    }

    _toggle() {
        const { entry, toggleSelection } = this.props;
        const { selected } = this.state;
        this.setState({ selected: !selected });
        toggleSelection(entry);
    }

    render() {
        const { entry } = this.props;
        return (
            <div
                className={`${styles.entry} ${this.state.selected ? styles.selected : ""}`}
                onClick={this._toggle.bind(this)}>
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
