// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

type MessageType = {
  text: string;
  timestamp: number;
}

const Message = (props: { message: MessageType }) => (
  <p key={props.message.timestamp}>{props.message.text}</p>
);

const MessageList = (props: { messages: Array<MessageType>}) => (
  <div>
    {props.messages.map(m => Message({message: m}))}
  </div>
);

class TextForm extends React.Component {
  props: {
    handleNewMessage: (message: MessageType) => void
  };
  state: {
    value: string
  };
  handleChange: () => void;
  _handleChange: () => void;
  handleSubmit: () => void;
  _handleSubmit: () => void;

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this._handleChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange({target: { value }}: {target: { value: string } }) {
    this.setState({value: value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    const timestamp = Date.now().valueOf();
    this.props.handleNewMessage({
      text: this.state.value,
      timestamp: timestamp
    });
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class ChatApp extends React.Component {
  props: {
    name: string
  };
  state: {
    messages: Array<MessageType>
  };
  handleNewMessage: (message: MessageType) => void;
  _handleNewMessage: (message: MessageType) => void;
  handleNewMessageFromServer: (message: MessageType) => void;
  _handleNewMessageFromServer: (message: MessageType) => void;
  socket: any;

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.handleNewMessage = this._handleNewMessage.bind(this);
    this.handleNewMessageFromServer = this._handleNewMessageFromServer.bind(this);
    this.socket = io.connect('http://localhost:8080');

    this.socket.on('new message', (msg) => {
      this.handleNewMessageFromServer(msg);
    });
  }

  _handleNewMessage(message: MessageType) {
    this.socket.emit('sent message', message);
  }

  _handleNewMessageFromServer(message: MessageType) {
    this.setState(({ messages }: { messages: Array<MessageType> }) => {
      messages.push(message);
      return {
        messages: messages
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <MessageList messages={this.state.messages} />
        <TextForm handleNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
}

ReactDOM.render(
  <ChatApp name='My Chatroom' />,
  document.getElementById('react')
);
