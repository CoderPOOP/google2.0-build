import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react"
import avatarimage from './avatarimage.png'
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = e => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return;
    router.push(`search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" height={40} width={120} className="cursor-pointer" onClick={() => router.push("/")}/>

        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
            <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text"></input>
            <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-125" onClick={() => {searchInputRef.current.value = ""}}/>
            <hr className="border border-l-1 border-gray-300 h-7 mr-2 hidden sm:inline-flex"/>
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-600 transition duration-150 transform hover:scale-125 cursor-pointer"/>
            <hr className="border border-l-1 border-gray-300 h-7 mr-2 hidden sm:inline-flex"/>
            <SearchIcon className="h-7 text-blue-500 hidden sm:inline-flex transition duration-150 transform hover:scale-125 cursor-pointer"/>
            <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Image className="h-10 rounded-full cursor-pointer transition duration-150 hover:border" loading="lazy" src={avatarimage} alt="profile picture" />
        </div>

        <HeaderOptions />
    </header>
  )
}

export default Header;