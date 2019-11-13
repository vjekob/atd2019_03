import React, { Component } from "react";
import { DataContainer } from "../dataContainer/DataContainer";
import { SummaryContainer } from "../summaryContainer/SummaryContainer";

export class View extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <DataContainer data={data}></DataContainer>
                <SummaryContainer selected={{}}></SummaryContainer>
            </>
        );
    }
}
