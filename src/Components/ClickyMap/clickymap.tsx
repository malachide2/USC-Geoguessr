'use client'

import Image from "next/image";

export default function ClickyMap() {
  const clickEvent = (event: React.MouseEvent) => {
    const { offsetX, offsetY } = event.nativeEvent;
    console.log(`${offsetX} ${offsetY}`);
  }
  return (
    <div>
      <main>
        <Image
          src="/clickymap.png"
          alt="Map of USC"
          width={180}
          height={180}
          onClick={clickEvent}
          priority
        />
      </main>
    </div>
  );
  }