import React, { Component } from 'react';
import BoardStore from '../stores/BoardStore';
import { observer } from 'mobx-react';

@observer
export default class Reset extends Component {
  constructor() {
    super();
    this.store = BoardStore;
  }

  render() {
      return (
      <button className="reset" onClick={this.store.reset}>
        Сбросить
      </button>
    );
  }
}
