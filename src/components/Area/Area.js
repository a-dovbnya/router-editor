import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { setPlace } from "../../actions";
import { isGetRoute, getCenter } from "../../reducers";
import { Input } from "./styledComponents";

export class Area extends PureComponent {
  keyDownHandler = e => {
    if (e.keyCode === 13) {
      this.props.setPlace({
        name: e.target.value,
        coords: this.props.getCenter
      });
      e.target.value = "";
    }
  };

  componentDidUpdate() {
    if (!this.props.isGetRoute) {
      this.input.focus();
    }
  }

  render() {
    return (
      <Input
        onKeyDown={this.keyDownHandler}
        placeholder="Введите точку маршрута"
        disabled={this.props.isGetRoute}
        innerRef={input => {
          this.input = input;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  isGetRoute: isGetRoute(state),
  getCenter: getCenter(state)
});

const mapDispatchToProps = {
  setPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Area);
