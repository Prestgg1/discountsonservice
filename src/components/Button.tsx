export default function Button({children,type,className,loading,onClick}: {children:React.ReactNode,type?:("submit" | "button"),bgColor?:string,className?:string,loading?:boolean,onClick?:React.MouseEventHandler<HTMLButtonElement>}){
    return(
      <button type={type}  onClick={onClick} disabled={loading || false} className={`${className} disabled:bg-primary  disabled:text-white disabled:bg-opacity-50 flex justify-center items-center hover:bg-opacity-75 font-extrabold btn duration-300`}> {loading && <span className="loading loading-spinner loading-md"></span>} {children}</button>
    )
}
