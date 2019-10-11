import * as React from 'react';

class Province extends React.PureComponent<{
  id: string
  label: string
  transform: string
  children: React.ReactNode
}> {
  render() {
    return (
      <g id={this.props.id} transform={this.props.transform}>
        {this.props.children}
      </g>
    );
  }
}

export {Province};
