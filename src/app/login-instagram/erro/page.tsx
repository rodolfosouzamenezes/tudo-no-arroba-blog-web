import { XCircle } from 'lucide-react'
import colors from 'tailwindcss/colors'

export default function ErrorInstagramLogin() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-8">
      <XCircle size={100} color={colors.zinc[200]} className="mb-8" />

      <p className="mb-2 text-center text-lg font-medium">
        Não foi possível realizar a ação
      </p>
      <p className="text-center text-sm text-zinc-500">
        Tente novamente mais tarde!
      </p>
      <p className="mt-4 text-center text-sm font-semibold text-zinc-500">
        Clique em "Cancelar" para voltar a tela anterior
      </p>
    </div>
  )
}
