import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { AgreementLetter } from '../../../_metronic/partials/widgets/tables/AgreementLetter'
import History from '../../../_metronic/partials/history/History'
import { useState } from 'react'
import ListsWidget1 from '../../../_metronic/partials/widgets/lists/ListsWidget1'


const DashboardPage = () => {
  const [result, setResult] = useState('')

  return (
      <>

        {/* begin::Row */}
        <div className='row g-5 g-xl-8'>
          {/* begin::Col */}
          <div className='col-xl-4'>
            <ListsWidget1 
              setResult={setResult}
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
