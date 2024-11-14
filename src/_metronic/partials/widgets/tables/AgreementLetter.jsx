/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'


const AgreementLetter = ({className, result}) => {

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([result], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "surat-perjanjian-legalmate.txt";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Surat Perjanjian</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Silahkan salin dan pindahkan isi surat perjanjian di bawah ini</span>
        </h3>
        <button onClick={handleDownload} className="btn btn-success">Download</button>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <textarea value={result} className='form-control' rows={50} placeholder='isi perjanjian...'/>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {AgreementLetter}
