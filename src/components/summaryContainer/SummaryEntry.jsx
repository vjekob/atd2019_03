import React, { Component } from "react";

export class SummaryEntry extends Component {
    render() {
        const { currency, amount } = this.props;
        if (!amount)
            return null;

        return (
            <tr>
                <td>{currency}</td>
                <td>{amount}</td>
            </tr>
        );
    }
}
