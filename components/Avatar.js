import Image from "next/image"

const Avatar = ({ url }) => {
  return (
    <>
    <Image className="h-10 rounded-full cursor-pointer transition duration-150 hover:border" loading="lazy" src={url} alt="profile picture" />
    </>
  )
}

export default Avatar;