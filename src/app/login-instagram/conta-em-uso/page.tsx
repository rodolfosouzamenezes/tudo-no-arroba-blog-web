import { UserX } from 'lucide-react'
import colors from 'tailwindcss/colors'

export default function AccountAlreadyConnectedInstagramLogin() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-8">
      <UserX size={100} color={colors.zinc[200]} className="mb-8" />

      <p className="mb-2 text-center text-lg font-medium">
        A conta já está em uso
      </p>
      <p className="text-center text-sm text-zinc-500">
        Essa conta do Instagram já está em uso por outro perfil no Tudo No@,
        entre em contato com o suporte para resolver essa situação!
      </p>
      <p className="mt-4 text-center text-sm font-semibold text-zinc-500">
        Clique em "Cancelar" para voltar a tela anterior
      </p>
    </div>
  )
}
