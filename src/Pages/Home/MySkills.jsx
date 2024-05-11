import data from "../../data/index.json";

export default function MySkills() {
  const containerStyle = {
    textAlign: 'center',
  };

  const logoRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
  };

  const logoStyle = {
    width: '200px', // Set a suitable width
    height: '200px',
    margin: '0 10px', // Add spacing between logos
  };
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>

      <div style={containerStyle}>
      {/* <h1>Logo Row Example</h1> */}
      <div style={logoRowStyle}>
        <img src="https://media.licdn.com/dms/image/C4D12AQE0h5f-EQtPgA/article-cover_image-shrink_600_2000/0/1520128719894?e=2147483647&v=beta&t=mQ_-vuueGIL_aY187bWmx0A-VEmaCGKyxg0YirUlh_Y" alt="HTML Logo" style={logoStyle} />
        <img src="https://images7.design-editor.com/90/9098746/3958/46d2d005-1b02-4961-aa1d-0aba7f7209bd.jpg" alt="CSS Logo" style={logoStyle} />
        <img src="https://bootscore.me/wp-content/uploads/2023/06/bootscore-5.3.0.webp" alt="CSS Logo" style={logoStyle} />
        <img src="https://w0.peakpx.com/wallpaper/583/455/HD-wallpaper-javascript-bts-coding-kod-kodlama-code-phone-lock-logo-locked.jpg" alt="JavaScript Logo" style={logoStyle} />
        <img src="https://www.bhmpics.com/downloads/react-js-logo-Wallpapers/42.dark-mode-react-in-depth-guide.jpg" alt="React Logo" style={logoStyle} />
      </div>
    </div>
      {/* <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
