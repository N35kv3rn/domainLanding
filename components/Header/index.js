import Image from "next/image"

export default function Header({ text }) {

    return (
        <div className="container flex flex-col justify-center items-center py-10 bg-amber-100">
            <Image className="object-top object-cover rounded-full w-40 h-40" src="/../public/pb.jpg" height="200" width="200" alt="profile picture"/>
            <h1 className="text-3xl font-bold mt-5">{text}</h1>
        </div>
    )
}