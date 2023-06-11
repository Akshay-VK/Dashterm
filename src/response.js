import React, {Component} from 'react';
import { stylesheet } from "../dashboard";

/**
 * Response component.
 */
export class Response extends Component {
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