import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.svg"
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode}>) => {
  return (
    <main>
      <StreamVideoProvider>
        { children }
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout