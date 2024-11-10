import Image from "next/image";

export default function ClickyMap() {
    return (
      <div>
        <main>
          <Image
            src="/clickymap.png"
            alt="Map of USC"
            width={180}
            height={180}
            priority
          />
        </main>
      </div>
    );
  }