import Button from "../Button";

export default function ForgetPassword(){
  return(
    <form className="h-full w-full  md:h-auto flex-1 md:flex-initial flex flex-col gap-2 md:gap-5 justify-between md:justify-normal">
      <div className="space-y-2">
        <label htmlFor="forgetpassword">Email</label>
        <input type="text" id="forgetpassword" placeholder="Enter your email" className="w-full input input-bordered"/>
      </div>
    <Button type="submit" className="w-full bg-primary text-white">Submit</Button>
    </form>
  )
}
