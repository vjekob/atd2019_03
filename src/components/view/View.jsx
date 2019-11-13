import React, { Component } from "react";
import { DataContainer } from "../dataContainer/DataContainer";
import { SummaryContainer } from "../summaryContainer/SummaryContainer";

export class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    _selectEntry(entry) {
        const { selected } = this.state;
        this.setState({
            selected: selected.includes(entry)
                ? selected.filter(e => e !== entry)
                : [...selected, entry]
        });
    }

    render() {
        const { data } = this.props;
        const { selected } = this.state;
        return (
            <>
                <DataContainer data={data} toggleSelection={this._selectEntry.bind(this)}></DataContainer>
                <SummaryContainer selected={selected}></SummaryContainer>
            </>
        );
    }
}
