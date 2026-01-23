import React from 'react'
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";

function Avatar({initialsLetters}) {
    const avatar = createAvatar(initials, {
        seed: initialsLetters,
        radius: 50,
        fontFamily: ["Tahoma"],
        fontWeight: 600,
      });
  return (
    <div>
        <Image src={avatar.toDataUri()} alt="avatar" width={75} height={75} />
    </div>
  )
}

export default Avatar