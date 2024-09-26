import Button from "@/components/Button";
import InviteFriends from "@/components/InviteFriends";
import Sidebar from "@/components/Sidebar";
import { IoMdExit } from "react-icons/io";


export default function MySubscriptions() {
  const list = [
    {
      id:1,
      name:"Spotify Premium Duo",
      image:"/images/spotify.png",
      bgColor:"green",
      desciption: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam saepe non iure? Earum, aliquam placeat. Porro a eaque"
    },
    {
      id:2,
      name:"Youtube Premium",
      image:"/images/youtube-logo.png",
      bgColor:"red",
      desciption: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam saepe non iure? Earum, aliquam placeat. Porro a eaque"
    }
  ]
  return (
    <div className=" flex flex-col h-full justify-center items-center gap-4 lg:my-10 my-5">
      {list.map((item) => (
        <div key={item.id} className="rounded-3xl [&>*]:px-4 [&>*]:py-8 overflow-hidden bg-white border-2 flex flex-col">
          <h1 className="text-white text-2xl font-bold md:text-4xl" style={{backgroundColor:item.bgColor}}>
            {item.name}
          </h1>
          <p>{item.desciption}
          <div  className="underline mt-4">Change Plan</div>  
          </p>
         
        </div>
      )
      )}
    </div>
  )
}
