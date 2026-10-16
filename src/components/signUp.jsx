import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.main
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-[#fffaf0] p-0 text-gray-900 sm:p-6 lg:p-10"
    >
      <div className="mx-auto flex min-h-screen max-w-2xl items-center justify-center overflow-hidden bg-white shadow-xl shadow-[#7F011F]/10 sm:min-h-[min(850px,calc(100vh-3rem))] sm:rounded-[2rem]">
        <section className="flex w-full items-center justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-md">
            <Link to="/" className="mb-10 inline-block text-2xl font-extrabold tracking-tight text-[#7F011F]">
              TOPIZA<span className="text-[#ff5252]">.</span>
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7F011F]">Join the table</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Create your account</h2>
            <p className="mt-3 text-gray-500">Sign up to find your next favorite meal.</p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
                navigate('/')
              }}
            >
              <div>
                <label htmlFor="full-name" className="mb-2 block text-sm font-semibold text-gray-800">
                  Full name
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#fffdfa] px-4 transition focus-within:border-[#7F011F] focus-within:ring-4 focus-within:ring-[#7F011F]/10">
                  <UserRound aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="min-w-0 flex-1 bg-transparent py-3.5 text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="mb-2 block text-sm font-semibold text-gray-800">
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#fffdfa] px-4 transition focus-within:border-[#7F011F] focus-within:ring-4 focus-within:ring-[#7F011F]/10">
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="min-w-0 flex-1 bg-transparent py-3.5 text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#fffdfa] px-4 transition focus-within:border-[#7F011F] focus-within:ring-4 focus-within:ring-[#7F011F]/10">
                  <LockKeyhole aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    minLength={8}
                    required
                    className="min-w-0 flex-1 bg-transparent py-3.5 text-gray-900 outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="grid size-8 shrink-0 place-items-center rounded-md text-gray-400 transition hover:text-[#7F011F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F011F]"
                  >
                    {showPassword ? <EyeOff aria-hidden="true" className="size-5" /> : <Eye aria-hidden="true" className="size-5" />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm leading-5 text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-0.5 size-4 shrink-0 rounded border-gray-300 accent-[#7F011F] focus:ring-[#7F011F]"
                />
                <span>
                  I agree to the{' '}
                  <a href="#terms" className="font-semibold text-[#7F011F] underline decoration-[#7F011F]/30 underline-offset-4 hover:text-[#ff5252]">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="#privacy" className="font-semibold text-[#7F011F] underline decoration-[#7F011F]/30 underline-offset-4 hover:text-[#ff5252]">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7F011F] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#7F011F]/20 transition hover:-translate-y-0.5 hover:bg-[#650018] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F011F]"
              >
                Create account
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#7F011F] transition hover:text-[#ff5252]">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </motion.main>
  )
}

export default SignUp