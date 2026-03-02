import { Link } from 'react-router-dom'
import { ShieldAlert, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <main className="bg-bg-primary min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4 max-w-xl">
        <ShieldAlert size={80} className="text-teal-primary mx-auto mb-8 opacity-40" />
        <h1 className="font-playfair font-bold text-8xl md:text-9xl text-teal-primary mb-4 leading-none select-none">
          404
        </h1>
        <h2 className="font-playfair font-bold text-2xl text-text-primary mb-6">
          This node is not on the ledger.
        </h2>
        <p className="font-inter text-text-muted mb-12 leading-relaxed">
          The requested URL could not be resolved or the transaction was invalid. Please return to the primary control plane.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-teal-primary hover:bg-teal-light text-bg-primary font-inter font-bold px-8 py-4 transition-colors"
        >
          <ArrowLeft size={18} />
          Return to Dashboard
        </Link>
      </div>
    </main>
  )
}

export default NotFound
