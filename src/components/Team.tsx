import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Team(){
  const t = useTranslations('Team');

  const users = [
    {
      id:1,
      fullname:"Səbuhi Sarıyev",
      image: 'prestgg.jpeg',
      descriptions:"NextJS,Nuxtjs,VueJS,Laravel,PHP",
      social:[
        { id: 1, url: "https://www.instagram.com/sebuhii313/", icon: <FaInstagram className="hover:text-primary opacity-0 invisible" /> },
        { id: 2, url: "https://www.youtube.com/channel/UC21kkrj6JNagvxPuDBsPM7Q", icon: <FaYoutube className="hover:text-primary opacity-0 invisible" /> },
        { id: 3, url: "https://x.com/Prestgg1", icon: <FaTwitter className="hover:text-primary opacity-0 invisible" /> }
      ]
    },
    {
      id:2,
      fullname:"Vüsal",
      image: 'vusal.jpeg',
      descriptions:"Html,Css,JavaScript",
      social:[
        { id: 1, url: "https://www.instagram.com/sebuhii313/", icon: <FaInstagram className="hover:text-primary opacity-0 invisible" /> },
        { id: 2, url: "", icon: <FaFacebook className="hover:text-primary opacity-0 invisible" /> },
        { id: 3, url: "", icon: <FaTwitter className="hover:text-primary opacity-0 invisible" /> }
      ]
    },
    {
      id:3,
      fullname:"Kamil",
      image: 'kamil.jpeg',
      descriptions:"C#,Html,Css",
      social:[
        { id: 1, url: "https://www.instagram.com/ka.m7l", icon: <FaInstagram className="hover:text-primary opacity-0 invisible" /> },
        { id: 2, url: "", icon: <FaFacebook className="hover:text-primary opacity-0 invisible" /> },
        { id: 3, url: "", icon: <FaTwitter className="hover:text-primary opacity-0 invisible" /> }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <h1 className="text-3xl text-center font-bold">{t('title')}</h1>
      <section className="flex w-full items-stretch flex-wrap justify-center gap-5 md:gap-10">
        {users.map((user, i) => (
          <div key={i} className="card card-compact bg-base-100 mx-2 md:mx-0 md:max-w-60 shadow-xl">
            <figure className="team h-full relative">
              <Image
                className="h-full w-full object-cover"
                src={`/images/${user.image}`}
                alt={user.fullname}
                width={384}
                height={256}
              />
              <div className="absolute justify-center flex items-center gap-4 [&_svg]:text-[#fff] [&_svg]:text-3xl [&_svg]:cursor-pointer opacity-0 [&_svg]:hover:visible [&_svg]:hover:opacity-100 [&_svg]:duration-300 w-11/12 h-5/6 rounded-xl bg-slate-500">
                {user.social.map((social, key) => (
                  <a key={key} href={social.url}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </figure>
            <div className="card-body basis-2/5 flex flex-col justify-center items-center text-center">
              <h2 className="card-title">{user.fullname}</h2>
              <p className="text-wrap">{user.descriptions}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
