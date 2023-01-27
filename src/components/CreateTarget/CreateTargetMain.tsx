import * as React from 'react'
import { PlusCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import '../../assets/css/CreateTarget.css'
import CreateTargetParameters from './CreateTargetParameters'
import CreateTargetConfirmation from './CreateTargetConfirmation'
export interface ICreateTargetProps {}
export interface ICreateTargetState {
  createTargetClickStatus: boolean
}
export default class CreateTarget extends React.Component<
  ICreateTargetProps,
  ICreateTargetState
> {
  constructor(props: ICreateTargetProps) {
    super(props)
    this.state = {
      createTargetClickStatus: false,
    }
  }

  handleCreateTargetClick = () => {
    this.setState({ createTargetClickStatus: true })
  }
  public render() {
    const { createTargetClickStatus } = this.state
    return (
      <>
        <Card className="create-target-card">
          <div className="default-sub-container-ct-main">
            <div className="questionOutline">
              <QuestionCircleOutlined style={{ fontSize: '20px' }} />
            </div>
            <div className="text-container-ct-main">
              <p className="title-1-dm">
                Start by setting an overall reduction target
              </p>
              <p className="title-2-ct">
                Setting an overall reduction target allows you to track your
                decarbonisation measures and emissions reduction over time{' '}
              </p>
            </div>
            <Button
              onClick={() => this.handleCreateTargetClick()}
              className="button-ct-main"
            >
              <PlusCircleOutlined style={{ color: '#F9F5F1' }} />
              <p className="button-text-ct">Create Target</p>
            </Button>
          </div>
        </Card>
        {createTargetClickStatus && <CreateTargetConfirmation />}
      </>
    )
  }
}
