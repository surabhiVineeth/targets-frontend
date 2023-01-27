import {
  EditOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import { Button, Card } from 'antd'
import React, { useState } from 'react'
import '../../assets/css/TargetSummary.css'
import * as Texts from '../../assets/texts'
export interface ITargetSummaryProps {}

const tempData = {
  Packaging: true,
  Product: true,
  Website: true,
}
const defaultRender = (
  <>
    <div className="row-content-ts">
      <div className="row-empty-box-ts-2">
        <div className="empty-content-1-ts"></div>
        <div className="empty-content-2-ts"></div>
      </div>
    </div>
    <div className="row-content-ts-2">
      <div className="sub-row-content-1-ts">
        <p className="sub-title-1-ts">Target start date</p>
        <div className="empty-content-4-ts"></div>
      </div>
      <div className="sub-row-content-1-ts">
        <p className="sub-title-1-ts">Target Completition date</p>
        <div className="empty-content-4-ts"></div>
      </div>
    </div>
    <div className="line-break-ts"></div>
    <div className="row-content-ts">
      <div className="empty-content-3-ts"></div>
    </div>
  </>
)

const generateUnAvailableAreas = (productAreas: { [key: string]: boolean }) => {
  let renderContent = new Array()
  if (productAreas) {
    Object.keys(productAreas).map((productType) => {
      renderContent.push(<li className="list-ts-2">{productType}</li>)
    })
  }
  return renderContent
}

const renderWithData = (
  productIntensityId: string,
  warning: boolean,
  availableAreas: { [key: string]: boolean }
) => {
  const targetIdentity =
    productIntensityId === 'Absolute'
      ? 'Absolute reduction'
      : 'Average product emissions reduction'
  const mainTitle =
    productIntensityId === 'Absolute'
      ? 'Reduce overall emissions by 45% by Jan 2030'
      : 'Reduce the average emissions per product by 45% by Jan 2030'
  return (
    <>
      <div className="row-content-ts-3">
        <div className="row-empty-box-ts">
          <p className="main-title-ts">{mainTitle}</p>
          <div className="sub-content-ts-1">
            <div className="block-title-1-ts">
              <p className="target-text-ts">{targetIdentity}</p>
            </div>
            {productIntensityId === 'Absolute' && (
              <div className="block-title-1-ts">
                <p className="target-text-ts">4.2 % business growth</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row-content-ts-2">
        <div className="sub-row-content-1-ts">
          <p className="sub-title-1-ts">Target start date</p>
          <p className="date-ts">Jan 2023</p>
        </div>
        <div className="sub-row-content-1-ts">
          <p className="sub-title-1-ts">Target Completition date</p>
          <p className="date-ts">Jan 2023</p>
        </div>
      </div>
      <div className="line-break-ts-2"></div>
      {warning && (
        <>
          <div className="warning-wrapper">
            <div className="warning-sub-class-1">
              <WarningOutlined />
            </div>
            <div className="warning-sub-class-2">
              <p className="warning-text">{Texts.warning_text_ts}</p>
            </div>
          </div>
          <div className="row-content-ts">
            <ul className="list-wrapper-ts-2">
              {generateUnAvailableAreas(tempData)}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default function TargetSummary(props: ITargetSummaryProps) {
  const [targetAvailableStatus, setTargetAvailableStatus] = useState(true)
  return (
    <Card className="target-summary">
      <div className="row-content-ts">
        <p className="ts-heading">
          Target Summary{' '}
          <span>
            {' '}
            <InfoCircleOutlined className="exclamation-ts" />
          </span>
        </p>
      </div>
      {!targetAvailableStatus && defaultRender}
      {targetAvailableStatus && renderWithData('Relative', true, tempData)}
      <div className="row-content-ts-1">
        <Button type="text" className="button-ts">
          <EditOutlined className="editIcon" />
          Edit target
        </Button>
      </div>
    </Card>
  )
}
