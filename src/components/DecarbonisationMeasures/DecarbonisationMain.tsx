import * as React from 'react'
import { Button, Collapse, Card } from 'antd'
import * as Methods from '../../methods/DecarobonisationMeasures'
import '../../assets/css/DecarobonisationMain.css'
import { BulbOutlined } from '@ant-design/icons'
const { Panel } = Collapse

export interface DecarobonisationProps {}

export interface DecarbonisationState {
  selectedButton: string
  measuresAvailableStatus: boolean
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export default class DecarbonisationMain extends React.Component<
  DecarobonisationProps,
  DecarbonisationState
> {
  constructor(props: DecarobonisationProps) {
    super(props)
    this.state = {
      measuresAvailableStatus: false,
      selectedButton: 'Active',
    }
  }
  onChange = (key: string | string[]) => {
    console.log(key)
  }

  render() {
    const { measuresAvailableStatus, selectedButton } = this.state
    return (
      <div className="decarbonisation-main">
        <div className="decarbonisation-header">
          <p className="main-title-dm">Decarbonisation measures</p>
          <div className="header-button-cover-dm">
            <Button
              style={{
                background: Methods.gtStyleForButton(selectedButton, 'Active')
                  .backGroundColor,
                color: Methods.gtStyleForButton(selectedButton, 'Active')
                  .fontColor,
              }}
              className="button-1-dm"
            >
              Active
            </Button>
            <Button
              style={{
                background: Methods.gtStyleForButton(selectedButton, 'Complete')
                  .backGroundColor,
                color: Methods.gtStyleForButton(selectedButton, 'Complete')
                  .fontColor,
              }}
              className="button-2-dm"
            >
              Complete
            </Button>
            <Button
              style={{
                background: Methods.gtStyleForButton(
                  selectedButton,
                  'Suggested'
                ).backGroundColor,
                color: Methods.gtStyleForButton(selectedButton, 'Suggested')
                  .fontColor,
              }}
              className="button-3-dm"
            >
              Suggested
            </Button>
          </div>
        </div>
        {!measuresAvailableStatus && (
          <Card className="default-container-dm">
            <div className="default-sub-container">
              <div className="bulbOutline">
                <BulbOutlined style={{ fontSize: '20px' }} />
              </div>
              <div className="default-text-container-dm">
                <p className="title-1-dm">
                  You have no active decarbonisation measures
                </p>
                <p className="title-2-dm">
                  See the suggested decarbonisation measures to track the impact
                  of your actions on your goal
                </p>
              </div>
            </div>
          </Card>
        )}

        <Collapse
          expandIconPosition={'end'}
          defaultActiveKey={['1']}
          onChange={this.onChange}
        >
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
