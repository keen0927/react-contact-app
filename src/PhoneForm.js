import React, { Component } from 'react';

class PhoneForm extends Component {
  input = React.createRef();
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: ''
    })
    this.input.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="이름"
          ref={this.input}
        />

        <input type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="전화번호"/>
        <button type="submit">등록</button>
        <div>
          <p>{this.state.name}</p>
          <p>{this.state.phone}</p>
        </div>
      </form>
    );
  }
}

export default PhoneForm;
