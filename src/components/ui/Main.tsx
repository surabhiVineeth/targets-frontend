import * as React from 'react'
import CreateTarget from '../CreateTarget/CreateTargetMain'
export interface IMainProps {}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
      <div className="targets-container">
        <CreateTarget />
      </div>
    )
  }
}
