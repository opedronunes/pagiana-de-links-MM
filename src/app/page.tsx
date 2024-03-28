import Image from "next/image";
import { rs } from "./data/social";

export default function Home() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md flex-col px-2">
      <Image src={'/mm.png'} alt={'Imagem da logo da empresa'} className="w-36 -mb-8 md:w-48 h-auto md:-mb-12 z-10" width={500} height={500} />
      <div className="flex flex-col items-center justify-center text-gray-50 pt-12 gap-3 w-full  p-4 md:w-1/3 md:h-3/4 bg-gray-600 rounded-lg">
        {rs.map((item) => (
          <div key={item.id} className="w-full">
            <a href={item.url} target="_blank" className="font-semibold w-full flex hover:border-yellow-600 transition-all gap-2 justify-center items-center py-5 border-[1px] rounded-md border-gray-500 text-center">
              <img src={item.svg} alt={item.alt} />
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
