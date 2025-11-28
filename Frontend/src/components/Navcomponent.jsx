import Button from './button'

const Navcomponent = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-2 bg-black/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className=" flex gap-5  py-3 ">

        <Button to='/'>MyApp</Button>
        <Button to='/about'>About</Button>
        <Button to='/contact'>Contact</Button>
        <Button to="/details">Create resume </Button>
        <Button to="/history">History</Button>

      </div>

      <div className="flex gap-3">

        <button className="cursor-pointer text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <Button to='/signin'>Sign in </Button>

      </div>

    </nav>
  )
}

export default Navcomponent
