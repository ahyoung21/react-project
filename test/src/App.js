import React, { Component } from 'react';
import PhoneInfoList from './PhoneInfoList';
import PhoneInfo from './PhoneInfo';
import Counter from './Counter';

class App extends Component {
  id = 2;
  state = {
    info: [
      {
        id: 0,
        name: '홍길동',
        number: '010-0000-0000',
      },
    ],
    keyword: '',
  };

  handleCreate = (data) => {
    const { info } = this.state;

    this.setState({
      info: info.concat({ id: this.id++, ...data }),
    });
  };

  handleRemove = (id) => {
    const { info } = this.state;

    this.setState({
      info: info.filter((item) => item.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { info } = this.state;

    this.setState({
      info: info.map((item) => (id === item.id ? { ...info, ...data } : info)),
    });
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    const { info, keyword } = this.state;
    const filteredList = info.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <Counter onCreate={this.handleCreate} />
        {/* <PhoneInfo onCreate={this.handleCreate} /> */}
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
