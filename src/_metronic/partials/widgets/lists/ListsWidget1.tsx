/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import { generateText } from '../../../../app/modules/apps/user-management/users-list/core/_requestOpenAi'

type Props = {
  className: string
}

const ListsWidget1: React.FC<Props> = ({className}) => {
  const [prompt, setPrompt] = useState("")

  const handleGenerateContent = async () => {
    let finalPrompt = `what do you think about ${prompt}`
    try {
      let result = await generateText(finalPrompt)
    } catch (error) {
      
    }
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Tasks Overview</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Pending 10 tasks</span>
        </h3>

       
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Pihak 1</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-warning'>
                <KTIcon iconName='pencil' className='fs-2x text-warning' />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="nama Pihak 1..."
            />
            </div>
          </div>
        </div>
        {/* end::Item */}
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Pihak 2</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='pencil' className='fs-2x text-success' />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="nama Pihak 2..."
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Tujuan</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-info'>
                <KTIcon iconName='message-text-2' className='fs-2x text-info' />
              </span>
            </div>
            <input
              value={prompt}
              type="text"
              className="form-control"
              placeholder="Pinjaman 200 juta"
              onChange={(e) => setPrompt(e.target.value)}
            />
            </div>
          </div>
        </div>
        <div className=''>
          <a onClick={handleGenerateContent} href="#" className="btn btn-primary w-100">Proses</a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget1}
