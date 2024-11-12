'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  }

  return (
    <>
      {children}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        toastClassName={context =>
          contextClass[context?.type || 'default'] +
          'z-10 relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-hover my-3'
        }
        bodyClassName={() => 'flex text-medium font-white p-3 z-10'}
      />
    </>
  )
}
