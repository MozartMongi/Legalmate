/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {KTIcon} from '../../../helpers'
import { useForm } from 'react-hook-form';
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API,
  dangerouslyAllowBrowser: true
})


const ListsWidget1 = ({className, setResult}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false)

  const onGenerateContent = async (data) => {
    let finalPrompt = `Tolong buatkan surat perjanjian mengenai ${data.purpose} dalam bahasa Indonesia dengan detail berikut:
- Identitas Pihak Pertama: ${data.firstParty}
- Identitas Pihak Kedua: ${data.secondParty}
-tanggal dan tempat pembuatan perjanjian: ${data.dateAndPlace}
- Surat perjanjian tentang ${data.purpose}
- Jangka waktu pelaksanaan : ${data.duration}
- Harga atau biaya yang ditimbulkan : ${data.cost} rupiah
- Cara pembayaran yang disepakati : ${data.paymentMethod}
${data.tnc && `- syarat tambahan yang disepakati para pihak ${data.tnc}`} 
${data.forceMajeure && `- Ketentuan mengenai keadaan kahar: ${data.forceMajeure}`}
- Hak dan kewajiban masing-masing pihak harus tercantum
- Ketentuan penyelesaian sengketa jika terjadi perselisihan : ${data.howToSolveDispute}
- Akibat hukum yang akan timbul jika salah satu pihak melanggar perjanjian.: ${data.sanction}
Buat surat ini dalam format yang resmi dan mudah dipahami.`

    setIsLoading(true)
    setResult('Loading...')
    try {
      const result = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: finalPrompt,
        temperature: 1,
        max_tokens: 3200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      setResult(result.choices[0].text)
    } catch (error) {
      setResult('Error!!!')
    } finally {
      setIsLoading(false)
    }
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
                  <KTIcon iconName='security-user' className='fs-2x text-warning' />
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
            {errors.firstParty && <span className='text-danger'>Wajib diisi!</span>}
          </div>
        </div>
        {/* end::Item */}
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Identitas Pihak 2</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='security-user' className='fs-2x text-success' />
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
            {errors.secondParty && <span className='text-danger'>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Tanggal & Tempat Pembuatan Perjanjian</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-info'>
                <KTIcon iconName='geolocation-home' className='fs-2x text-info' />
              </span>
            </div>
            <input
              {...register("dateAndPlace", {required: true})}
              // value={purpose}
              // onChange={(e) => onChangePrompt(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Jakarta, 2 Desember 2023"
            />
            </div>
            {errors.dateAndPlace && <span className='text-danger'>Wajib diisi!</span>}
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
            {errors.purpose && <span className='text-danger'>Wajib diisi!</span>}
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
            {errors.duration && <span className='text-danger'>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Harga atau Imbalan (rupiah)</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='price-tag' className='fs-2x text-success' />
              </span>
            </div>
            <input
              {...register('cost', {required: true})}
            // value={object.cost}
            // onChange={(e) => onChangeObject(prev => ({...prev, cost: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="Harga/Imbalan yang ditimbulkan"
            />
            </div>
            {errors.cost && <span className='text-danger'>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Cara Pembayaran</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-success'>
                <KTIcon iconName='finance-calculator' className='fs-2x text-success' />
              </span>
            </div>
            <input
              {...register('paymentMethod', {required: true})}
            // value={object.cost}
            // onChange={(e) => onChangeObject(prev => ({...prev, cost: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="Metode pembayaran..."
            />
            </div>
            {errors.paymentMethod && <span className='text-danger'>Wajib diisi!</span>}
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label">Ketentuan Khusus</label>
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
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label">Ketentuan Force Majeure</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-danger'>
                <KTIcon iconName='abstract-15' className='fs-2x text-warning' />
              </span>
            </div>
            <input
              {...register('forceMajeure')}
            // value={object.tnc}
            // onChange={(e) => onChangeObject(prev => ({...prev, tnc: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="ketentuan bila force majeure"
            />
            </div>
          </div>
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Sanksi Perjanjian</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-danger'>
                <KTIcon iconName='cross-circle' className='fs-2x text-danger' />
              </span>
            </div>
            <input
              {...register('sanction', {required: true})}
            // value={object.tnc}
            // onChange={(e) => onChangeObject(prev => ({...prev, tnc: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="sanksi"
            />
            </div>
          </div>
          {errors.sanction && <span className='text-danger'>Wajib diisi!</span>}
        </div>
        <div className='align-items-center mb-7'>
          <div>
            <label className="form-label required">Cara Penyelesaian Sengketa</label>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-50px me-5'>
              <span className='symbol-label bg-light-danger'>
                <KTIcon iconName='arrow-mix' className='fs-2x text-warning' />
              </span>
            </div>
            <input
              {...register('howToSolveDispute', {required: true})}
            // value={object.tnc}
            // onChange={(e) => onChangeObject(prev => ({...prev, tnc: e.target.value}))}
              type="text"
              className="form-control"
              placeholder="Cara penyelesaian sengketa"
            />
            </div>
          </div>
          {errors.howToSolveDispute && <span className='text-danger'>Wajib diisi!</span>}
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
