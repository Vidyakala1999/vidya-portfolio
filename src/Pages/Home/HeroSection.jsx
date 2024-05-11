export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vidya A</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          As a web development student, I'm on a journey to blend creativity with code.

            <br /> Excited to build captivating digital experiences and explore the dynamic realm of web development.
          </p>
        </div>
        <button className="btn btn-primary"><a href="https://drive.google.com/file/d/194I_dyiTLetbaW3304V5d0uFOeJz7SzH/view?usp=drivesdk" style={{textDecoration:"none",color:"white"}}>RESUME</a></button>
      </div>
      <div className="hero--section--img">
        <img src="./img/vidyaaa.png" alt="Hero Section" />
      </div>
    </section>
  );
}
