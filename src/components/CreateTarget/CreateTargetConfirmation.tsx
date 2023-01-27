import React, { useState } from 'react'
import {
  ArrowRightOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  CheckOutlined,
  SaveOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { Button, DatePicker, Input, Tooltip } from 'antd'
import '../../assets/css/CreateTarget.css'
import * as Methods from '../../methods/CreateTargetMethods'
import * as Constants from '../../assets/customStyles'
import * as Texts from '../../assets/texts'

export interface ICreateTargetConfirmationProps {
  productIntensityId: string
}

type businessAreaInfo = {
  [key: string]: boolean
}

const tempData = {
  Deliveries: true,
  Packaging: true,
  Product: false,
  Operations: false,
}

export default function CreateTargetConfirmation(
  props: ICreateTargetConfirmationProps
) {
  const { productIntensityId } = props
  const suffix =
    productIntensityId === 'Absolute' || productIntensityId === 'None'
      ? 't CO2e'
      : 'g CO2e'
  const fieldNameBasedOnProductIntensityId =
    productIntensityId === 'Absolute' || productIntensityId === 'None'
      ? 'Absolute target'
      : 'Product emissions target'

  const placeholderTextBasedOnProductIntensityId =
    productIntensityId === 'Absolute' || productIntensityId === 'None'
      ? 'Reduce absolute emissions by 45% by Jan 2030'
      : 'Reduce the average emissions per product by 45% by 2030'
  function populateBusinessAreas(obj: businessAreaInfo): JSX.Element[] {
    let renderContent = new Array()
    if (Object) {
      Object.keys(obj).map((key) => {
        if (obj[key]) {
          renderContent.push(
            <li className="list-item-success-ctc">
              {' '}
              <CheckCircleOutlined /> {key}{' '}
            </li>
          )
        } else {
          renderContent.push(
            <li className="list-item-fail-ctc">
              {' '}
              <Tooltip
                placement="right"
                overlayInnerStyle={Constants.tooltip_ct1_1}
                title={
                  <div className="tooltip-ct1-2-container">
                    <p className="tooltip-ct1-2-sub-text-1">
                      {Texts.tooltip_ctc_text_1}
                    </p>
                    <p className="tooltip-ct1-2-sub-text-2">
                      {' '}
                      {Texts.tooltip_ctc_text_2}
                    </p>
                  </div>
                }
              >
                <CloseCircleOutlined /> {key}
              </Tooltip>
            </li>
          )
        }
      })
    }
    return renderContent
  }

  const { width1, width2 } = Methods.getWidthOfInput(productIntensityId)
  return (
    <div className="modal-crt-container">
      <div className="modal-ct1">
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
                <div className="icon-circle">
                  <CheckOutlined />
                </div>
              </div>
              <div className="text-wrapper-ct1">
                <p className="sub-text-ct1-1">Confirm your target</p>
                <p className="sub-text-ct1-2">
                  If you need to, you can adjust this target at any time
                </p>
              </div>
            </div>
            <div className="modal-body-content-1-ctc">
              <div className="element-wrapper-ctc-1">
                <p className="element-label">
                  {fieldNameBasedOnProductIntensityId}
                </p>
                <Input
                  className="input-ctc-1"
                  placeholder={placeholderTextBasedOnProductIntensityId}
                  style={{ width: width1 }}
                />
              </div>
              <div className="element-wrapper-ctc-2">
                <p className="element-label">Target emissions </p>
                <Input
                  placeholder={'11.5' + suffix}
                  className="input-ctc-2"
                  style={{ width: width2 }}

                  // suffix={suffix}
                />
              </div>
              <div className="element-wrapper-ctc-2">
                <p className="element-label">Base emissions </p>
                <Input
                  className="input-ctc-2"
                  placeholder={'24.6' + suffix}
                  style={{ width: width2 }}

                  //   suffix={suffix}
                />
              </div>
            </div>
            <div className="modal-body-content-2-ctc">
              <p className="ctc-sub-text-1">
                Your overall reduction will be tracked across these business
                areas:
              </p>
              <ul className="list-ctc">{populateBusinessAreas(tempData)}</ul>
            </div>
          </div>
          <div className="modal-footer-crt">
            <div className="button-container-ctc-1">
              <Button type="text" className="button-3-crt">
                Discard changes
              </Button>
            </div>
            <div className="button-container-ctc-2">
              <Button type="text" className="button-1-ctc">
                Continue editing
              </Button>
              <Button className="button-4-crt">
                <SaveOutlined />
                <p className="button-4-crt-text"> Save</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
