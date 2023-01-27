import React, { useState } from 'react'
import '../../assets/css/GoalsModal.css'
import { Button, Input, Slider } from 'antd'
import * as Methods from '../../methods/GoalsMethodStep1'

export default function GoalsModalStep2() {
  const [absoluteTargetStatus, setAbsoluteTargetStatus] = useState(false)
  const [relativeTargetStatus, setRelativeTargetStatus] = useState(false)

  function handleTargetSelection(targetType: string) {
    if (targetType === 'absolute') {
      setAbsoluteTargetStatus(true)
      setRelativeTargetStatus(false)
      return
    }
    setAbsoluteTargetStatus(false)
    setRelativeTargetStatus(true)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Create your first goal</h2>
        </div>
        <div
          className="modal-body-2"
          style={{
            height: Methods.getTargetModalHeight(
              absoluteTargetStatus,
              relativeTargetStatus
            ),
          }}
        >
          <div className="modal-body-content-0">
            <p className="back-text">Back to Step 1</p>
          </div>
          <div className="modal-body-content-4">
            <p className="modal-body-content-1-title">
              Is your target absolute or relative?
            </p>
          </div>
          <div className="modal-body-content-2">
            <Button
              className={
                Methods.getClassNameForGoalSelection(
                  absoluteTargetStatus,
                  'target'
                ).buttonClassName
              }
              onClick={() => handleTargetSelection('absolute')}
            >
              <div
                className={
                  Methods.getClassNameForGoalSelection(
                    absoluteTargetStatus,
                    'target'
                  ).titleClassName
                }
              >
                Absolute
              </div>
              <p
                className={
                  Methods.getClassNameForGoalSelection(
                    absoluteTargetStatus,
                    'target'
                  ).contentClassName
                }
              >
                An absolute target is based on total emissions and takes into
                account your annual business growth
              </p>
            </Button>
            <Button
              className={
                Methods.getClassNameForGoalSelection(
                  relativeTargetStatus,
                  'target'
                ).buttonClassName
              }
              onClick={() => handleTargetSelection('relative')}
            >
              <div
                className={
                  Methods.getClassNameForGoalSelection(
                    relativeTargetStatus,
                    'target'
                  ).titleClassName
                }
              >
                Relative
              </div>
              <p
                className={
                  Methods.getClassNameForGoalSelection(
                    relativeTargetStatus,
                    'target'
                  ).contentClassName
                }
              >
                A relative target is based on emissions intensity, for example
                the physical emissions intensity of your product{' '}
              </p>
            </Button>
          </div>
          <>
            {!relativeTargetStatus && (
              <>
                <div className="modal-body-content-3">
                  <div className="field-label-holder">
                    <p className="businessGrowth-label">
                      Estimated annual business growth{' '}
                    </p>
                    <Input suffix="% per year" className="input-1" />
                  </div>
                </div>
                <div className="modal-body-content-3">
                  <p className="reduction-text">Set a reduction target</p>
                </div>
                <div className="modal-body-content-4">
                  <div className="field-label-holder">
                    {/* <p className="field-label">Baseline</p> */}
                    <p className="field-description">Current total emissions</p>
                    <Input className="input-2" suffix="t CO2e" />
                  </div>
                  <div className="field-label-holder2">
                    {/* <p className="field-label">Target Date</p> */}
                    <p className="field-description">Target total emissions</p>
                    <Input className="input-2" suffix="t CO2e" />
                  </div>
                  <div className="field-label-holder2">
                    {/* <p className="field-label">Target Date</p> */}
                    <p className="field-description">Percentage reduction</p>
                    <Input className="input-2" suffix="%" />
                  </div>
                </div>
              </>
            )}
          </>
          <>
            {relativeTargetStatus && (
              <>
                <div className="modal-body-content-3">
                  <p className="reduction-text">Set a reduction target</p>
                </div>
                <div className="modal-body-content-4">
                  <div className="field-label-holder">
                    {/* <p className="field-label">Baseline</p> */}
                    <p className="field-description">
                      Current average emissions per product
                    </p>
                    <Input className="input-2" suffix="g CO2e" />
                  </div>
                  <div className="field-label-holder2">
                    {/* <p className="field-label">Target Date</p> */}
                    <p className="field-description">
                      Target average emissions per product
                    </p>
                    <Input className="input-2" suffix="g CO2e" />
                  </div>
                  <div className="field-label-holder2">
                    {/* <p className="field-label">Target Date</p> */}
                    <p className="field-description">Percentage reduction</p>
                    <Input className="input-2" suffix="%" />
                  </div>
                </div>
              </>
            )}
          </>
        </div>
        <div className="modal-body-content-5">
          <p className="progress-text">0</p>
          <Slider
            className="slider-1"
            defaultValue={30}
            tooltip={{ open: true }}
          />
          <p className="progress-text">24.56t</p>
        </div>
        <div className="modal-footer">
          <div>
            <h4 className="discard-changes">Discard changes</h4>
          </div>
          <div className="modal-footer-button-content">
            <p className="step-number">Step 2 of 2</p>
            <Button className="next-button-2">
              <div className="button-content">
                {/* <img className='image-class'  src='../../assets/svg/circle-arrow-right-solid.svg'/> */}
                <p className="button-label-2">Create goal</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
