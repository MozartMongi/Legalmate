import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  MixedWidget10,
  MixedWidget11,
  MixedWidget2,
  StatisticsWidget5,
  TablesWidget10,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'
import { AgreementLetter } from '../../../_metronic/partials/widgets/tables/AgreementLetter'
import History from '../../../_metronic/partials/history/History'
import { useState } from 'react'
import ListsWidget1 from '../../../_metronic/partials/widgets/lists/ListsWidget1'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
})

const DashboardPage = () => {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [object, setObject] = useState({
    firstParty: '',
    secondParty: '',
    obj: '',
    cost: '',
    duration: '',
    tnc: ''
  })
  const [result, setResult] = useState('')

  const handleGenerateContent = async () => {
    let finalPrompt = `Tolong buatkan surat perjanjian ${prompt} dalam bahasa Indonesia dengan detail berikut:
- Nama Pihak Pertama: ${object.firstParty}
- Nama Pihak Kedua: ${object.secondParty}
- Objek : ${object.obj}
- Durasi : ${object.duration}
- Biaya sewa: ${object.cost}
- ${object.tnc}
- Hak dan kewajiban masing-masing pihak harus tercantum
- Ketentuan penyelesaian sengketa jika terjadi perselisihan
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
      console.log('err>>', error)
      setResult('Error!!!')
    } finally {
      setIsLoading(false)
    }
  }
  return (
      <>

        {/* begin::Row */}
        <div className='row g-5 g-xl-8'>
          {/* begin::Col */}
          <div className='col-xl-4'>
            <ListsWidget1 
              isLoading={isLoading}
              purpose={prompt}
              object={object}
              onChangeObject={setObject}
              onChangePrompt={setPrompt} 
              handleGenerateContent={handleGenerateContent} 
              className='card-xl-stretch mb-xl-8' 
            />
          </div>
          {/* end::Col */}

          {/* begin::Col */}
          <div className='col-xl-8'>
            <AgreementLetter result={result} className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
          {/* end::Col */}
          <div className='col-xl-12'>
            <History />
          </div>
        </div>
        {/* end::Row */}

        
      </>

  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
