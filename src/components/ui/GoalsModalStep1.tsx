import React, { useState } from 'react'
import { Button, Input, DatePicker } from 'antd'
import '../../assets/css/GoalsModal.css'
import * as Methods from '../../methods/GoalsMethodStep1'
// eslint-disable-next-line jsx-a11y/click-events-have-key-events

export default function GoalsModalStep1() {
  const [goalSelectedStatus, setGoalSelectedStatus] = useState(false)

  function handleGoalSelection() {
    console.log('reaching here')
    setGoalSelectedStatus(true)
  }

  return (
    <div className="modal">
      <div
        className="modal-content"
        style={Methods.getGoalsModalHeight(goalSelectedStatus)}
      >
        <div className="modal-header">
          <h2 className="modal-title">Create your first goal</h2>
        </div>
        <div className="modal-body">
          <div className="modal-body-content-1">
            <p className="modal-body-content-1-title">
              First, select the type of goal you would like to set
            </p>
          </div>
          <div className="modal-body-content-2">
            <Button
              className={
                Methods.getClassNameForGoalSelection(
                  goalSelectedStatus,
                  'goals'
                ).buttonClassName
              }
              onClick={() => handleGoalSelection()}
            >
              <div
                className={
                  Methods.getClassNameForGoalSelection(
                    goalSelectedStatus,
                    'goals'
                  ).titleClassName
                }
              >
                Business level goal
              </div>
              <p
                className={
                  Methods.getClassNameForGoalSelection(
                    goalSelectedStatus,
                    'goals'
                  ).contentClassName
                }
              >
                Set a high-level, strategic goal based on an overall emissions
                or reduction target
              </p>
            </Button>
            <Button
              className="specific-goal"
              onClick={() => handleGoalSelection()}
            >
              <div className="specific-goal-title">Specific goal</div>
              <p className="goal-content">
                Set a goal based on a specific product or emissions area
              </p>
            </Button>
          </div>
          {goalSelectedStatus && (
            <>
              <div className="modal-body-content-3">
                <div className="field-label-holder">
                  <p className="field-label">Goal Name</p>
                  <Input className="input-1" />
                </div>
              </div>
              <div className="modal-body-content-4">
                <div className="field-label-holder">
                  <p className="field-label">Baseline</p>
                  <p className="field-description">
                    select the base date for your goal
                  </p>
                  <DatePicker className="goal-datepicker" />
                </div>
                <div className="field-label-holder2">
                  <p className="field-label">Target Date</p>
                  <p className="field-description">
                    Ideally 5-10 years from your baseline
                  </p>
                  <DatePicker className="goal-datepicker" />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="modal-footer">
          <div>
            <h4 className="discard-changes">Discard changes</h4>
          </div>
          <div className="modal-footer-button-content">
            <p className="step-number">Step 1 of 2</p>
            <Button className="next-button-1">
              <div className="button-content">
                {/* <img className='image-class'  src='../../assets/svg/circle-arrow-right-solid.svg'/> */}
                <p className="button-label-1">Next</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
