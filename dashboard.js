import React, {Component} from 'react';
import blessed from 'blessed';
import {render} from 'react-blessed';

/**
 * Stylesheet
 */
const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};

/**
 * Top level component.
 */
class Dashboard extends Component {
  render() {
    return (
      <element>
        <Log />
        <Request />
        <Response />
        <Jobs />
        <Progress />
        <Stats />
      </element>
    );
  }
}

/**
 * Log component.
 */
class Log extends Component {
  render() {
    return (
      <box
        label="Log"
        class={stylesheet.bordered}
        width="60%"
        height="70%"
        draggable={true}>
        {'Hello'}, {0}, {'World'}
      </box>
    );
  }
}

/**
 * Request component.
 */
class Request extends Component {
  render() {
    return (
      <box label="Request" class={stylesheet.bordered} top="70%" width="30%">
        {0}
      </box>
    );
  }
}

/**
 * Response component.
 */
class Response extends Component {
  render() {
    return (
      <box
        label="Response"
        class={stylesheet.bordered}
        top="70%"
        left="30%"
        width="30%"
      />
    );
  }
}

/**
 * Jobs component.
 */
class Jobs extends Component {
  render() {
    return (
      <box
        label="Jobs"
        class={stylesheet.bordered}
        left="60%"
        width="40%"
        height="60%"
      />
    );
  }
}

/**
 * Progress component.
 */
class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {progress: 0, color: 'blue'};

    const interval = setInterval(() => {
      if (this.state.progress >= 100) return clearInterval(interval);

      this.setState({progress: this.state.progress + 1});
    }, 50);
  }

  render() {
    const {progress} = this.state,
      label = `Progress - ${progress}%`;

    return (
      <progressbar
        label={label}
        onComplete={() => this.setState({color: 'green'})}
        class={stylesheet.bordered}
        filled={progress}
        top="60%"
        left="60%"
        width="40%"
        height="10%"
        style={{bar: {bg: this.state.color}}}
      />
    );
  }
}

/**
 * Stats component.
 */
class Stats extends Component {
  render() {
    return (
      <box
        label="Stats"
        class={stylesheet.bordered}
        top="70%"
        left="60%"
        width="40%"
        height="31%">
        Some stats
      </box>
    );
  }
}

/**
 * Rendering the screen.
 */
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});

render(<Dashboard />, screen);

/*
import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed";

class ProgressBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      toRight: true
    };

    setInterval(() => {
      const {position, toRight} = this.state,
        newDirection = position === (toRight ? 90 : 0) ? !toRight : toRight,
        newPosition = newDirection ? position + 1 : position - 1;

      this.setState({
        position: newPosition,
        toRight: newDirection
      });
    }, 30);
  }
  render() {
    const position = `${this.state.position}%`;

    return (
      <box
        top="center"
        left="0"
        width="10%"
        height="20%"
        border={{type: 'line'}}
        style={{bg: 'cyan', border: {fg: 'blue'}}}>
        <progressbar
          orientation="horizontal"
          filled={this.state.position}
          top="80%"
          left="center"
          height="15%"
          width="100%"
          label="progress"
          border={{type: 'line'}}
          style={{border: {fg: 'red'}, bar: {bg: 'red'}}}
        />
      </box>
    );
  }
}

// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <><box
        label="Progress..."
        top="center"
        left="center"
        width="50%"
        height="50%"
        border={{ type: "line" }}
        style={{ border: { fg: "blue" } }}
      >
        Hello World!
      </box>
      <box top="80%" left="50%" width="50%" height="50%">
      <ProgressBox/>
      </box>
      </>
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed hello world",
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
*/