import axios from "axios"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { changeLoginStatus } from "../../features/login/loginSlice"


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, data, { withCredentials: true})
    .then(response => {
      dispatch(changeLoginStatus({
        loggedIn: true,
        user: response.data
    }));
      console.log("logged in", response)
    })
    .catch(error => {
      dispatch(changeLoginStatus({
        loggedIn: false,
        user: null
    }))
    })
    // console.log(data)
  }


  // console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form  className='flex flex-col py-5 gap-2' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="email">Email</label>
      <input className='mp-2 border border-indigo-800 p-2' type="email" id="email" {...register("email", { required: true })} />
      <label htmlFor="password">Password</label>
      <input className='mp-2 border border-indigo-800 p-2' type="password" id="password" {...register("password", { required: true })} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}


      <input className='mt-6 p-2 bg-indigo-800 text-white rounded-md hover:bg-indigo-700' type="submit" />
    </form>
  )
}