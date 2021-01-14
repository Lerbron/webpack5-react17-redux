import Loadable from 'react-loadable'
import React from 'react'

import PageLoading from '@/components/Loading/PageLoading.js'

export default Loadable({
  loader: () => import('./About'),
  loading: () => <PageLoading />
});
