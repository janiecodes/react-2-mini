import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select disabled={this.props.allowEdit === 'false'} onChange={e => this.props.update(e.target.value)} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
}
