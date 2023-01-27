import React, { useState } from 'react'
import { Button, Input, DatePicker, Card, Progress } from 'antd'
import '../../assets/css/OverallReductionTarget.css'
import '../../assets/css/ReductionMeasuresSummary.css'

export default function ReductionMeasuresSummary() {
  const [dataExistStatus, setDataExistStatus] = useState(false)
  return (
    <Card className="overall-reduction-target">
      <div className="header-content-ort">
        <p style={{ width: '352px' }} className="heading-ort">
          Reduction measures summary
        </p>
      </div>
      <div className="parameter-content-ort">
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title"> Completion rate</p>
          <div className="parameter-sub-content-value-holder">
            <p className="parameter-sub-content-value">
              {' '}
              {dataExistStatus ? 1 : 0}
            </p>
            <p className="parameter-sub-content-value-suffix">
              measures completed
            </p>
          </div>
        </div>
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title-rms-2">
            {' '}
            Estimated current reduction
          </p>
          <div className="parameter-sub-content-value-holder">
            <p className="parameter-sub-content-value">
              {' '}
              {dataExistStatus ? 1 : 0}{' '}
            </p>
            <p className="parameter-sub-content-value-suffix">(t CO2e )</p>
          </div>
        </div>
        <div className="parameter-sub-content-ort">
          <p className="parameter-sub-content-title-2">
            {' '}
            Total potential reduction
          </p>

          <div className="parameter-sub-content-value-holder">
            <p className="parameter-sub-content-value">
              {' '}
              {dataExistStatus ? 1 : 0}{' '}
            </p>
            <p className="parameter-sub-content-value-suffix">per year </p>
          </div>
        </div>
      </div>
      <hr className="line-break-ort" />
      <div className="body-content-rms">
        <div className="sub-content-rms">
          <p className="indicators-title-rms">Estimated reduction progress</p>
          <Progress
            strokeColor={'#5956B4'}
            className="progress-bar-rms"
            percent={30}
          />
        </div>
        <div className="sub-content-rms">
          <p className="indicators-title-rms">
            Reduction measures potential (% of reduction target)
          </p>
          <Progress
            strokeColor={'#28716A'}
            status={'normal'}
            className="progress-bar-rms"
            percent={100}
          />
        </div>
      </div>
    </Card>
  )
}
