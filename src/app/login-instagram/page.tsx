'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { env } from '@/utils/env'

export default function InstagramLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const code = searchParams.get('code')
  const state = searchParams.get('state')

  const handleInstagramLogin = async () => {
    try {
      const userId = JSON.parse(state)?.userId

      const response = await axios.get(
        `${env.NEXT_PUBLIC_API_BASE_URL}/unauth/instagram/user/${userId}/code/${code}`,
      )

      console.log(response.data.data)

      router.replace(`/login-instagram/sucesso?username=rodolfomszs`)

      console.log(response.data)
    } catch (error) {
      const status = error?.response?.status
      if (status === 409) return router.replace('/login-instagram/conta-em-uso')

      router.replace('/login-instagram/erro')

      console.error(error)
    }
  }

  useEffect(() => {
    handleInstagramLogin()
  }, [])

  return (
    <div className="flex h-full flex-1 items-center justify-center">
      Carregando...
    </div>
  )
}
