import Button from './button'

const Navcomponent = () => {
  return (
    <nav className="flex justify-between bg-black items-center px-10 ">
  <div className=" flex gap-5  py-3 ">

    <Button to='/'>MyApp</Button>
      <Button to='/about'>About</Button>
      <Button to='/contact'>Contact</Button>
      <Button to="/details">Create resume </Button>
      <Button to="/history">History</Button>
       
  </div>

  <div className="flex gap-3">

    <button className="cursor-pointer">🌙</button>
     <Button to='/signin'>Sign in </Button>

  </div>
  
</nav>
  )
}

export default Navcomponent
