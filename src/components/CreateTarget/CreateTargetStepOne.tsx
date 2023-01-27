import Icon, {
  ArrowRightOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Button, DatePicker, Input, Tooltip } from 'antd'
import React, { useState } from 'react'
import '../../assets/css/CreateTarget.css'
import * as Methods from '../../methods/CreateTargetMethods'
import * as Constants from '../../assets/customStyles'
import * as Texts from '../../assets/texts'
interface ICreateTargetStepOneProps {}

const CreateTargetStepOne: React.FunctionComponent<
  ICreateTargetStepOneProps
> = (props) => {
  const [productIntensityStatus, setProductIntensityStatus] = useState(false)
  const [productIntensityId, setProductIntensityId] = useState('None')
  const [productAvailabilityStatus, setProductAvailabilityStatus] =
    useState(true)
  const [enableNext, setEnableNext] = useState(false)
  const [basePeriodDataAvailableStatus, setBasePeriodDataAvailableStatus] =
    useState(false)

  const [
    areParametersInlineWithSBTiGuidance,
    setareParametersInlineWithSBTiGuidance,
  ] = useState(false)
  function handleProductIntensityClick(targetType: string) {
    setProductIntensityId(targetType)
    setProductIntensityStatus(true)
  }

  const suffix =
    productIntensityId === 'Absolute' || productIntensityId === 'None'
      ? 't CO2e'
      : 'g CO2e'
  const fieldNameBasedOnProductIntensityId =
    productIntensityId === 'Absolute' || productIntensityId === 'None'
      ? 'Target emissions'
      : 'Target product footprint'
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
                  <p className="icon-text">1</p>
                </div>
              </div>
              <p className="sub-text-crt">
                Is your target absolute or based on a representative product
                intensity?{' '}
              </p>
              <Tooltip
                overlayInnerStyle={Constants.tooltip_ct1_1}
                placement="bottom"
                title={
                  productAvailabilityStatus
                    ? Texts.tooltip_ct1_1_default_text
                    : Texts.tooltip_ct1_1_no_product_text
                }
              >
                <span>
                  <ExclamationCircleOutlined />
                </span>
              </Tooltip>
            </div>
            <div className="sub-content-1-ct1">
              <Button
                className={Methods.getClassNameForProductIntensity(
                  productIntensityStatus,
                  'Absolute',
                  productIntensityId
                )}
                onClick={() => handleProductIntensityClick('Absolute')}
              >
                Absolute
              </Button>
              <Button
                className={Methods.getClassNameForProductIntensity(
                  productIntensityStatus,
                  'Representative',
                  productIntensityId
                )}
                disabled={productAvailabilityStatus ? false : true}
                onClick={() => handleProductIntensityClick('Representative')}
              >
                Representative product
              </Button>
            </div>
            {productIntensityId === 'Absolute' && (
              <div className="sub-content-1-ct1">
                <div className="element-wrapper-ct1">
                  <p className="element-label">
                    Estimated annual business growth
                  </p>
                  <Input className="input-ct1-1" suffix="% per year" />
                </div>
              </div>
            )}
            <div className="modal-body-content-1-crt">
              <div className="question-circle-outer-block">
                <div className="icon-circle">
                  <p className="icon-text">2</p>
                </div>
              </div>
              <p className="sub-text-crt">
                What is the base year for this target?{' '}
              </p>
              <Tooltip
                // overlayClassName='tooltip-ct1-2'
                overlayInnerStyle={Constants.tooltip_ct1_2}
                placement="right"
                title={
                  <div className="tooltip-ct1-2-container">
                    <p className="tooltip-ct1-2-sub-text-1">
                      {Texts.tooltip_ct1_2_sub_text_1}
                    </p>
                    <p className="tooltip-ct1-2-sub-text-2">
                      {' '}
                      {Texts.tooltip_ct1_2_sub_text_2}
                    </p>
                    <ul>
                      <li className="tooltip-ct1-2-sub-text-3">
                        {Texts.tooltip_ct1_2_sub_text_3}
                      </li>
                      <li className="tooltip-ct1-2-sub-text-3">
                        {Texts.tooltip_ct1_2_sub_text_4}
                      </li>
                    </ul>
                  </div>
                }
              >
                <span>
                  <ExclamationCircleOutlined />
                </span>
              </Tooltip>
            </div>
            <div className="sub-content-1-parent-wrapper">
              <div className="sub-content-1-ct1">
                <div className="element-wrapper-ct2">
                  <p className="element-label">Base year</p>
                  <DatePicker
                    placeholder="Select year"
                    className="datepicker-ct1-1"
                    picker="month"
                  />
                </div>
                <div className="element-wrapper-ct2">
                  <p className="element-label">Base emissions</p>
                  <Input className="input-ct1-1" suffix={suffix} />
                </div>
              </div>
              {!basePeriodDataAvailableStatus && (
                <>
                  {' '}
                  <p className="error-text-ct1-1">
                    No data is available for the selected base year
                  </p>
                  <p className="error-text-ct1-2">
                    Please manually enter the total carbon emissions for the
                    year selected
                  </p>
                </>
              )}
            </div>

            <div className="modal-body-content-1-crt">
              <div className="question-circle-outer-block">
                <div className="icon-circle">
                  <p className="icon-text">3</p>
                </div>
              </div>
              <div className="text-wrapper-ct1">
                <p className="sub-text-ct1-1">
                  What is your overall reduction target?{' '}
                </p>
                <p className="sub-text-ct1-2">
                  Want to ensure your target is in line with SBTi guidance?{' '}
                  <a
                    className="ct1-link-1"
                    href="https://sciencebasedtargets.org/set-a-target"
                  >
                    {' '}
                    Find out more{' '}
                  </a>
                </p>
              </div>
            </div>
            <div className="sub-content-1-parent-wrapper">
              <div className="sub-content-1-ct1">
                <div className="element-wrapper-ct1">
                  <p className="element-label">
                    {fieldNameBasedOnProductIntensityId}{' '}
                  </p>
                  <Input className="input-ct1-2" suffix={suffix} />
                </div>
                <div className="element-wrapper-ct1">
                  <p className="element-label">Percentage reduction </p>
                  <Input className="input-ct1-3" suffix="%" />
                </div>
                <div className="element-wrapper-ct1">
                  <p className="element-label">Target completion date </p>
                  <DatePicker
                    placeholder="Select date"
                    className="datepicker-ct1-2"
                    picker="month"
                  />
                </div>
              </div>
              {areParametersInlineWithSBTiGuidance && productIntensityId}
            </div>
          </div>
          <div className="modal-footer-crt">
            <Button type="text" className="button-3-crt">
              Discard Changes
            </Button>
            <Button
              disabled={enableNext ? false : true}
              className="button-4-crt"
            >
              <ArrowRightOutlined />
              <p className="button-4-crt-text"> Next</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTargetStepOne
