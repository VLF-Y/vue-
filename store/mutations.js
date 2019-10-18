
// import { VIEW_LOADING } from './types'
import * as types from './types'

export default {
  // 'VIEW_LOADING':(state,payload)=>state.bLoading=payload
  // VIEW_LOADING:(state,payload)=>state.bLoading=payload
  // [VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,

  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
  [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
  [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,

  [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,

  [types.CHECK_USER]:(state,payload)=>state.user=payload,

}

/* var proname='proname'
Oobj['proname']
Oobj[proname]
 */