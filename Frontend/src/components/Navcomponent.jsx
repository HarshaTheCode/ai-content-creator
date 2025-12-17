import Button from './button'
import CTAButton from './CTAButton'
import { useLocation } from 'react-router-dom'

const Navcomponent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const textColorClass = isHome ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-white';
  const hoverBgClass = isHome ? 'hover:bg-black/5' : 'hover:bg-white/10';
  const logoColorClass = isHome ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-white';

  return (
    <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-transparent transition-all duration-300">
      <div className="flex gap-5 py-3 items-center">

        <Button to='/' className={`${textColorClass} ${hoverBgClass} font-medium`}>MyApp</Button>
        <div className="hidden md:flex gap-2">
          <Button to='/about' className={`${textColorClass} ${hoverBgClass}`}>About</Button>
          <Button to='/contact' className={`${textColorClass} ${hoverBgClass}`}>Contact</Button>
          <Button to="/details" className={`${textColorClass} ${hoverBgClass}`}>Create resume</Button>
          <Button to="/history" className={`${textColorClass} ${hoverBgClass}`}>History</Button>
        </div>

      </div>

      <div className="flex gap-3 items-center">

        <button className={`cursor-pointer transition-colors ${logoColorClass}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <CTAButton to='/signin' className="px-6 py-2 text-sm shadow-md">Sign in</CTAButton>

      </div>

    </nav>
  )
}

export default Navcomponent
