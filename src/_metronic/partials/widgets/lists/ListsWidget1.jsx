/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import { generateText } from '../../../../app/modules/apps/user-management/users-list/core/_requestOpenAi'

// type Props = {
//   className: string,
//   handleGenerateContent: Function,
//   onChangeSecondParty: Function,
//   onChangeFirstParty: Function,
//   onChangePrompt: Function
// }

const ListsWidget1 = ({className, purpose, handleGenerateContent, onChangePrompt, object, onChangeObject, isLoading}) => {

  

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Detail Perjanjian</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>masukan semua hal yang perlu dicantumkan dalam surat perjanjian</span>
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
            value={object.firstParty}
            onChange={(e) => onChangeObject(prev => ({...prev, firstParty: e.target.value}))}
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
              value={object.secondParty}
              onChange={(e) => onChangeObject(prev => ({...prev, secondParty: e.target.value}))}
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
              value={purpose}
              type="text"
              className="form-control"
              placeholder="Jual Beli Mobil..."
              onChange={(e) => onChangePrompt(e.target.value)}
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Durasi</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-warning'>
                <KTIcon iconName='timer' className='fs-2x text-warning' />
              </span>
            </div>
            <input
            value={object.duration}
            onChange={(e) => onChangeObject(prev => ({...prev, duration: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="durasi perjanjian"
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label">Objek</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-info'>
                <KTIcon iconName='briefcase' className='fs-2x text-info' />
              </span>
            </div>
            <input
            value={object.obj}
            onChange={(e) => onChangeObject(prev => ({...prev, obj: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="nama objek"
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Biaya</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='finance-calculator' className='fs-2x text-success' />
              </span>
            </div>
            <input
            value={object.cost}
            onChange={(e) => onChangeObject(prev => ({...prev, cost: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="Biaya yang ditimbulkan"
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label">Ketentuan</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-danger'>
                <KTIcon iconName='information-4' className='fs-2x text-danger' />
              </span>
            </div>
            <input
            value={object.tnc}
            onChange={(e) => onChangeObject(prev => ({...prev, tnc: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="ketentuan yang diberlakukan"
            />
            </div>
          </div>
        </div>
        <div className=''>
          <a onClick={handleGenerateContent} href="#" className="btn btn-primary w-100">{isLoading ? 'Loading...' : 'Proses'}</a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export default ListsWidget1
