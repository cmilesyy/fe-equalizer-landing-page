import android from "../assets/images/icon-android.svg";
import apple from "../assets/images/icon-apple.svg";
import bg1 from "../assets/images/bg-pattern-1.svg";
import bg2 from "../assets/images/bg-pattern-2.svg";
import illustration from "../assets/images/illustration-app.png";
import logo from "../assets/images/logo.svg";

function Hero() {
  return (
    <>
      <section>
        <header>
          <img src={logo} alt="" />
        </header>
        <div className="pb-40">
          <h1>We make your music sound extraordinary.</h1>
          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>

        <div className="bg-[#191826] rounded-xl relative">
          <img
            src={illustration}
            alt=""
            className=" absolute h-[436px] -top-30 left-[25%] z-10"
          />
          <div className="relative h-80 flex items-center justify-center overflow-hidden">
            <img
              src={bg2}
              alt=""
              className="absolute h-[364px] top-[0%] overflow-hidden"
            />
          </div>
          <div className="bg-[#FA7453] text-[#FCFAF9] px-10 pt-12 rounded-xl">
            <h3 className="font-bold text-3xl pb-3">Premium EQ</h3>
            <p>
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
            <div className="flex gap-4 items-center py-5">
              <p className="text-6xl">£4</p>
              <span className="font-extralight">/ month</span>
            </div>

            <div className="flex items-center justify-center flex-col ">
              <button className="text-[#FCFAF9] bg-black rounded-xl w-[296px] px-5 py-3 flex items-center gap-4 mb-5">
                <span>
                  <img src={apple} alt="" />
                </span>
                <span>IOS Download</span>
              </button>
              <button className="text-black bg-[#FCFAF9] rounded-xl w-[296px] px-5 py-3 flex items-center gap-4 mb-12">
                <span>
                  <img src={android} alt="" />
                </span>
                <span>Android Download</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
