import { NavLink } from "react-router";
import loginImg from "../../assets/Login.jpg";
import Logo from "../../assets/veloce.png"

export default function Login() {
  return (
    <div className='w-full h-screen flex justify-center items-center' style={{background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loginImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
      
      <div className="rounded-[40px] flex flex-col justify-center px-6 py-12 lg:px-8 w-[450px]" style={{ backgroundColor: 'rgba(20,71,230,0.3)', backdropFilter:'blur(6px)',}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={Logo} alt="Veloce" className="mx-auto w-20" />
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">Sign up and create your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label for="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
              <div className="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign up</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?
            <NavLink to="/Login" className="font-semibold text-indigo-400 hover:text-indigo-300">Log in</NavLink>
          </p>
        </div>
      </div>

    </div>
  )
}
