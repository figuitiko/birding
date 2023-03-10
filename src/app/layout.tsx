import './globals.css'
import Header from './components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head /> 
      
          
      <body>
        <main className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
        <Header />

        {children}
        </main>
        </body>
    </html>
  )
}
