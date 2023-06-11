import React, {Component} from 'react';
import blessed from 'blessed';
import {render} from 'react-blessed';

import {Jobs} from "./src/jobs";
import { Progress } from './src/progress';
import { Log } from './src/log';
import {Request} from './src/request';
import {Response} from './src/response';
import {Stats} from './src/stats';

/**
 * Stylesheet
 */
export const stylesheet = {
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