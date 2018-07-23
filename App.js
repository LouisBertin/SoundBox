import React, { Fragment } from "react";
import Header from './src/components/Header';
import AudioContainer from "./src/containers/AudioContainer";

export default class App extends React.Component {
  render () {
    return (
        <Fragment>
            <Header />
            <AudioContainer />
        </Fragment>
    )
  }
}
