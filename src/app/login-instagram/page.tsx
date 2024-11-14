'use client'

import { useCallback, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { env } from '@/utils/env'
import Lottie from 'react-lottie'
import * as animationData from '@/assets/loading-animation.json'

export default function InstagramLogin() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const code = searchParams.get('code')
  const state = searchParams.get('state')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handleInstagramLogin = async () => {
    try {
      const userId = JSON.parse(state)?.userId

      const response = await axios.get(
        `${env.NEXT_PUBLIC_API_BASE_URL}/unauth/instagram/user/${userId}/code/${code}`,
      )

      router.push(
        pathname +
          '?' +
          createQueryString('username', response.data.data.account.username),
      )
    } catch (error) {
      const status = error?.response?.status
      console.error(error)

      if (status === 409) return router.replace('/login-instagram/conta-em-uso')

      router.replace('/login-instagram/erro')
    }
  }

  useEffect(() => {
    handleInstagramLogin()
  }, [])

  return (
    <div className="flex h-full flex-1 items-center justify-center bg-white">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={300}
        width={300}
      />
    </div>
  )
}
