/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {KTIcon} from '../../../helpers'
import { useForm } from 'react-hook-form';



const ListsWidget1 = ({className, purpose, handleGenerateContent, onChangePrompt, object, onChangeObject, isLoading}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onGenerateContent = (data) => {
    console.log('DATA >>', data)
  }

  

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
            <label className="form-label required">Identitas Pihak 1</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
                <span className='symbol-label bg-light-warning'>
                  <KTIcon iconName='pencil' className='fs-2x text-warning' />
                </span>
              </div>
              <input
              {...register("firstParty", {required: true})}
              // value={object.firstParty}
              // onChange={(e) => onChangeObject(prev => ({...prev, firstParty: e.target.value}))}
                type="text"
                className="form-control"
                placeholder="nama, alamat, dan nomor identitas"
              />
            </div>
            {errors.firstParty && <span>Wajib diisi!</span>}
          </div>
        </div>
        {/* end::Item */}
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Identitas Pihak 2</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='pencil' className='fs-2x text-success' />
              </span>
            </div>
            <input
              {...register("secondParty", {required: true})}
              // value={object.secondParty}
              // onChange={(e) => onChangeObject(prev => ({...prev, secondParty: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="nama, alamat, dan nomor identitas"
            />
            </div>
            {errors.secondParty && <span>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Pokok Perjanjian</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-info'>
                <KTIcon iconName='message-text-2' className='fs-2x text-info' />
              </span>
            </div>
            <input
              {...register("purpose", {required: true})}
              // value={purpose}
              // onChange={(e) => onChangePrompt(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Jual Beli Mobil..."
            />
            </div>
            {errors.purpose && <span>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Tempat dan tanggal pembuatan perjanjian</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-info'>
                <KTIcon iconName='message-text-2' className='fs-2x text-info' />
              </span>
            </div>
            <input
              {...register("placeAndDate", {required: true})}
              // value={purpose}
              // onChange={(e) => onChangePrompt(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Jakarta, 14 Agustus 1945"
            />
            </div>
            {errors.placeAndDate && <span>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Jangka waktu pelaksanaan</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-warning'>
                <KTIcon iconName='timer' className='fs-2x text-warning' />
              </span>
            </div>
            <input
              {...register('duration', {required: true})}
            // value={object.duration}
            // onChange={(e) => onChangeObject(prev => ({...prev, duration: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="durasi perjanjian"
            />
            </div>
            {errors.duration && <span>Wajib diisi!</span>}
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
              {...register('object', {required: true})}
            // value={object.obj}
            // onChange={(e) => onChangeObject(prev => ({...prev, obj: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="nama objek"
            />
            </div>
            {errors.object && <span>Wajib diisi!</span>}
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
              {...register('cost', {required: true})}
            // value={object.cost}
            // onChange={(e) => onChangeObject(prev => ({...prev, cost: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="Biaya yang ditimbulkan"
            />
            </div>
            {errors.cost && <span>Wajib diisi!</span>}
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
              {...register('tnc')}
            // value={object.tnc}
            // onChange={(e) => onChangeObject(prev => ({...prev, tnc: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="ketentuan yang diberlakukan"
            />
            </div>
          </div>
        </div>
        <div className=''>
          <a onClick={handleSubmit(onGenerateContent)} href="#" className="btn btn-primary w-100">{isLoading ? 'Loading...' : 'Proses'}</a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export default ListsWidget1
