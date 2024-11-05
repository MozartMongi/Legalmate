import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget1,
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

const DashboardPage = () => (
  <>

    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      {/* begin::Col */}
      <div className='col-xl-4'>
        <ListsWidget1 className='card-xl-stretch mb-xl-8' />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-8'>
        <AgreementLetter className='card-xl-stretch mb-5 mb-xl-8' />
      </div>
      {/* end::Col */}
      <div className='col-xl-12'>
        <History />
      </div>
    </div>
    {/* end::Row */}

    
  </>
)

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
