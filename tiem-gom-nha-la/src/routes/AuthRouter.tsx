// import { useEffect } from 'react'
// import { langCode } from '@/locale/languages'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from '~/pages/auth/Auth'
import NotFound from '~/pages/NotFound'
import ForgetPassword from '~/pages/auth/ForgetPassword'

// import storePersist from '@/redux/storePersist'
// import { translateAction } from '@/redux/translate/actions'
// import { useDispatch } from 'react-redux'

export default function AuthRouter() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const { loadDefaultLang } = storePersist.get('firstVisit')

  //   if (!loadDefaultLang) {
  //     dispatch(translateAction.translate(langCode()))
  //   }
  // }, [])

  return (
    <Routes>
      <Route element={<Auth />} path='/' />
      <Route element={<Auth />} path='/login' />
      <Route element={<Navigate to='/login' replace />} path='/logout' />
      <Route element={<ForgetPassword />} path='/forgetpassword' />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
