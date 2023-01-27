import React, { useState } from 'react'
import { Button, Input, DatePicker, Card } from 'antd'
import '../../assets/css/OverallReductionTarget.css'
import { ExclamationCircleOutlined } from '@ant-design/icons'

export default function OverallReductionTarget() {
  const [dataExistStatus, setDataExistStatus] = useState(false)
  return (
    <Card className="overall-reduction-target">
      <div className="header-content-ort">
        <p className="heading-ort">Overall reduction target</p>
        <ExclamationCircleOutlined className="outlineCircle" />
      </div>
      <div className="parameter-content-ort">
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title"> Current emissions</p>
          <div className="parameter-sub-content-value-holder">
            <p className="parameter-sub-content-value"> 24.56 </p>
            <p className="parameter-sub-content-value-suffix">t CO2e </p>
          </div>
        </div>
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title-2">
            {' '}
            Progress towards target
          </p>
          {dataExistStatus ? (
            <div className="parameter-sub-content-value-holder">
              <p className="parameter-sub-content-value"> 20 % </p>
              <p className="parameter-sub-content-value-suffix">
                (-2.70 t CO2e )
              </p>
            </div>
          ) : (
            <div className="disable-data-box"></div>
          )}
        </div>
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title-2">
            {' '}
            Expected business growth
          </p>
          {dataExistStatus ? (
            <div className="parameter-sub-content-value-holder">
              <p className="parameter-sub-content-value"> 4.2% </p>
              <p className="parameter-sub-content-value-suffix">per year </p>
            </div>
          ) : (
            <div className="disable-data-box"></div>
          )}
        </div>
      </div>
      <hr className="line-break-ort" />
      <div className="body-content-ort">
        {dataExistStatus && (
          <div className="body-sub-content-ort">
            <div className="body-sub-content-param-holder">
              <p className="body-sub-content-param">Target</p>
              <p className="body-sub-content-param-date">31 Jan 2030</p>
            </div>
            <div className="progress-bar-1-ort"></div>
            <div className="progress-bar-progress-content">
              <p className="progress-bar-progress-title-1">11.05</p>
              <p className="progress-bar-progress-title-2">t COe</p>
            </div>
          </div>
        )}
        <div className="body-sub-content-ort">
          <div className="body-sub-content-title">
            <p className="body-sub-content-param">Current</p>
            <p className="body-sub-content-param-date">3 Jan 2030</p>
          </div>
          <div className="progress-bar-content">
            <div className="progress-bar-2-ort"></div>
            <div className="progress-bar-progress-content">
              <p className="progress-bar-progress-title-1">21.85</p>
              <p className="progress-bar-progress-title-2">t COe</p>
            </div>
          </div>{' '}
        </div>
        {dataExistStatus && (
          <div className="body-sub-content-ort">
            <div className="body-sub-content-title">
              <p className="body-sub-content-param">Baseline</p>
              <p className="body-sub-content-param-date">31 Jan 2030</p>
            </div>
            <div className="progress-bar-content">
              <div className="progress-bar-3-ort"></div>
              <div className="progress-bar-progress-content">
                <p className="progress-bar-progress-title-1">25.05</p>
                <p className="progress-bar-progress-title-2">t COe</p>
              </div>
            </div>{' '}
          </div>
        )}
      </div>
    </Card>
  )
}
