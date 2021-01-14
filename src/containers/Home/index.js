import Loadable from 'react-loadable'
import React from 'react'

import PageLoading from '@/components/Loading/PageLoading.js'
import './index.scss'

export default Loadable({
  loader: () => import('./Home'),
  loading: () => <PageLoading />
});
