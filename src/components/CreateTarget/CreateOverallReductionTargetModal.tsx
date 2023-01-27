import {
  QuestionCircleFilled,
  ArrowRightOutlined,
  CloseOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import '../../assets/css/CreateTarget.css'
import * as Methods from '../../methods/CreateTargetMethods'
interface IAppProps {}

const CreateReductionTargetModal: React.FunctionComponent<IAppProps> = (
  props
) => {
  const [buttonId, setButtonIdStatus] = useState('None')
  const [buttonClickStatus, setButtonClickStatus] = useState(false)
  function handleButtonClick(id: string) {
    setButtonClickStatus(true)
    id === 'Yes' ? setButtonIdStatus('Yes') : setButtonIdStatus('No')
  }

  const { buttonClassName, disableStatus } = Methods.getClassNameForButton(
    buttonClickStatus,
    buttonId
  )

  return (
    <div className="modal-crt-container">
      <div className="modal-crt">
        <div className="modal-content-crt">
          <div className="modal-header-crt">
            <h2 className="modal-title">Create an overall reduction target</h2>
            <CloseOutlined
              style={{ fontSize: '20px' }}
              className="close-icon"
            />
          </div>
          <div className="modal-body-crt">
            <div className="modal-body-content-1-crt">
              <div className="question-circle-outer-block">
                <QuestionCircleFilled className="question-circle-crt" />
              </div>
              <p className="sub-text-crt">
                Do you already have an overall reduction target?
              </p>
            </div>
            <div className="modal-body-content-1-crt">
              <Button
                onClick={() => handleButtonClick('Yes')}
                className={Methods.getClassNameForTargetSelection(
                  buttonClickStatus,
                  'Yes',
                  buttonId
                )}
              >
                Yes, I already have one
              </Button>
              <Button
                onClick={() => handleButtonClick('No')}
                className={Methods.getClassNameForTargetSelection(
                  buttonClickStatus,
                  'No',
                  buttonId
                )}
              >
                No, I need to create one from scratch
              </Button>
            </div>
            {buttonId === 'Yes' && (
              <>
                <div className="default-sub-container">
                  <div className="icon-circle-block">
                    <ClockCircleOutlined style={{ fontSize: '18px' }} />
                  </div>
                  <div className="default-text-container-crt">
                    <p className="title-1-crt">
                      Great, add your target details to start tracking progress
                    </p>
                    <p className="title-2-crt">
                      We currently support a single target. If you have more
                      than one target, we recommend you add your overall
                      reduction target
                    </p>
                  </div>
                </div>
              </>
            )}

            {buttonId === 'No' && (
              <>
                <div className="default-sub-container">
                  <div className="icon-circle-block">
                    <ClockCircleOutlined style={{ fontSize: '18px' }} />
                  </div>
                  <div className="default-text-container-crt">
                    <p className="title-1-crt">Coming Soon!</p>
                    <p className="title-2-crt">
                      We’re currently working on a feature to allow you to
                      explore and create targets from scratch{' '}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer-crt">
            <Button type="text" className="button-3-crt">
              Cancel
            </Button>
            <Button disabled={disableStatus} className={buttonClassName}>
              <ArrowRightOutlined />
              <p className="button-4-crt-text"> Next</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateReductionTargetModal
