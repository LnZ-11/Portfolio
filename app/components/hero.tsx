import Image from "next/image"

export default function Hero(){
    return(
        <div className="hero bg-base-200 blur-overlay text-primary-content">
  <div className="hero-content flex-col lg:flex-row">
    <Image
      src="/Images/onStage.png"
      alt=""
      className="max-w-sm rounded-lg shadow-2xl mx-4"
      width={500}
      height={500}
    />
    <div>
      <h1 className="text-5xl font-bold title-gradient">Who am I ?</h1>
      <div className="text-md md:text-xl py-6 ">
        <p>I&apos;m <b>Lyes Lattari</b>, a frontend developer who found his true voice through <b>ReactJS and Next.js</b>.</p>
        <br/>
        <p>For as long as I can remember, I&apos;ve been fascinated by computers back in middle school, I’d spend hours assembling and disassembling my PC just for fun.</p>
        <br/>
        <p>But my story isn&apos;t only about machines. I&apos;m also a musician, and my guitar “Clara” has always been my way of speaking. Rock and metal riffs became my first language of creativity, long before I wrote my first line of code.</p>
        <br/>
        <p>It was during my studies in automation engineering that I realized where my heart really belonged. While wires and circuits left me cold, programming lit a fire inside me. At the beginning, even the tough parts, like <b>C++</b>, <b>8086 assembly</b> <b>Pascal</b>, opened my eyes to the raw beauty of logic and what can be made with only a keyboard and some imagination.</p>
        <br/>
        <p>From those first HTML, CSS, and PHP experiments I made in a full-stack web development training, I knew I was chasing something bigger. Discovering <b>React</b> felt like stepping into another world, the world of endless possibilies. Thanks to the guidance of <b>Melvyn Malherbe</b>, a mentor I deeply admire, I learned to wield it with purpose and passion.</p>
        <br/>
        <p>Now, I stand here as a <b>developer who loves to create</b>. Not just functional apps, but experiences, things that people can feel, enjoy, and connect with.</p>
        <br />
        <p>I&apos;m based in Algeria, but my work has no borders. Whether it&apos;s a project, an internship, or a challenge that pushes my limits, I&apos;m ready. Because for me, code isn&apos;t just work it&apos;s another way to play with the world.  </p>
      </div>
    </div>
  </div>
</div>
    )
}