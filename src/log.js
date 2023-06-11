import React, {Component} from 'react';
import { stylesheet } from "../dashboard";
/**
 * Log component.
 */
export class Log extends Component {
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