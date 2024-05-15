const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg text-orange-200"
      style={{
        backgroundImage: "url(https://imgur.com/zphYcRV.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-6xl font-bold text-orange-200">Welcome</h1>
          <p className="mb-5 text-2xl mt-3">
            <span className="text-4xl my-7">YOUR TRUSTED LOCAL ELECTRICIANS</span>
            <br />
             Quality Service You Can Count On!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
