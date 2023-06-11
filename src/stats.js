import React, {Component} from 'react';
import { stylesheet } from "../dashboard";

/**
 * Stats component.
 */
export class Stats extends Component {
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