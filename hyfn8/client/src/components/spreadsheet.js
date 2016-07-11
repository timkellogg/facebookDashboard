import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Spreadsheet extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  // TODO: move from imperative to functional style
  renderRows() {
    let rowsToRender = [];

    this.props.spreadsheetData.map((row, index) => {
      for (let property in row) {
        rowsToRender.push(
          <Column
            fixed={ property === 'ad_name' ? true : false }
            key={property}
            data={row[property]}
            header={<Cell>{this.prettyPrint(property)}</Cell>}
            cell={<Cell>{row[property]}</Cell>}
            width={this.calculateColumnWidth(property.length)}
          />
        );
      }
    });

    return rowsToRender;
  }

  prettyPrint(text) {
    return text.replace(/_/g, ' ').split('').map(letter => letter.toUpperCase());
  }

  calculateColumnWidth(length) {
    return length * 20;
  }

  render() {
    if (!this.props.spreadsheetData) {
      return (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      );
    }

    const row_length = this.props.spreadsheetData.length;

    return (
      <div className="spreadsheet">
        <Table
          rowHeight={50}
          rowsCount={row_length}
          width={1000}
          height={100}
          headerHeight={50}
        >
          {this.renderRows()}
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { spreadsheetData: state.ads.data };
}

export default connect(mapStateToProps, actions)(Spreadsheet);