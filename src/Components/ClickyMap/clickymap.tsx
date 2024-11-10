'use client'

import Image from "next/image";

interface Props {
  ClickEvent: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ClickyMap: React.FC<Props> = (props) => {
  return (
    <div>
      <main>
        <Image
          src="/clickymap.png"
          alt="Map of USC"
          width={180}
          height={180}
          onClick={props.ClickEvent}
          priority
        />
      </main>
    </div>
  );
}

export default ClickyMap;