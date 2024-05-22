import Sidebar from '../_components/layout/sidebar'

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-dvh border-collapse gap-8  overflow-hidden">
      {/* Include shared UI here e.g. a header or sidebar */}

      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pb-1 pt-16 ">
        {children}
      </main>
    </div>
  )
}
