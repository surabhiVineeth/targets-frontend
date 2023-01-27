import { Button } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { CheckCircleFilled, CloseOutlined } from '@ant-design/icons'
import '../../assets/css/CompleteInitiative.css'
export default function CompleteInitiative() {
  return (
    <div className="modal-ci">
      <div className="modal-content-ci">
        <div className="modal-header-ci">
          <h2 className="modal-title-ci">Complete reduction measure</h2>
          <CloseOutlined />
        </div>
        <div className="modal-body-ci">
          <div className="modal-body-content-ci">
            <CheckCircleFilled className="check-circle" />
            <p className="main-title-ci">
              Your reduction measure has been completed
            </p>
            <p className="content-ci">
              Would you like to update your packaging information?
            </p>
            <p className="sub-content-ci">
              Updating your packaging data to reflect changes made through this
              reduction measure will improve the accuracy of your data across
              the dashboard
            </p>
          </div>
        </div>
        <div className="modal-footer-ci">
          {/* <div className="modal-footer-content-ci"> */}
          <Button className="transparent-button-ci" type="link">
            I’ll do this later
          </Button>
          <Button className="bold-button-ci">
            <div className="bold-button-content-ci">
              <p className="bold-button-label-ci">Update packaging data</p>
            </div>
          </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
