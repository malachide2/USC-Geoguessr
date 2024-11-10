import Image from "next/image";

export default function ClickyMap() {
    return (
      <div>
        <main>
          <Image
            src="/map"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </main>
      </div>
    );
  }