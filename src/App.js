import React from "react";
import Accordion from "./components/Accordion";
import Navbar2 from "./components/Navbar2";
import { CashOutline } from "react-ionicons";
import {Link} from "react-router-dom";
//className=" max-w-6xl mx-auto my-5 md:mx-8 md:my-8 lg:mx-10 xl:mx-12 2xl:mx-20"

function App() {
  return (
    <div className="App mx-auto ">
    
      <div className=" max-w-6xl mx-auto my-5 md:mx-8 md:my-8 lg:mx-10 xl:mx-12 2xl:mx-20">

        <Navbar2 />

        <div className="Hero-section h-1/3 flex flex-col md:grid md:grid-cols-2 md:gap-4 md:content-center ">
          <div className="left w-full order-2 md:order-1 space-y-6 md:space-y-4 grid grid-col-1 content-center justify-items-center md:justify-items-start">
            <h2 className="font-bold text-2xl text-center md:text-left md:text-4xl lg:text-6xl">
              Unleash the true potential of your Image
            </h2>
            <h3 className="text-center md:text-left">
              Ai Image upscaler will enhance your image in seconds
            </h3>
          <Link to="/upload"> <button className="button-cta w-64 ">Upload your Image</button></Link> 
          </div>
          <div className="right-animation order-1 md:order-2 grid grid-col-1 content-center justify-items-center md:justify-items-start">
          <div className="w-full overflow-hidden">
          <div className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/803838785?h=0df0159a0&badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0"
              title="Vimeo Video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: 'fill', borderRadius: '0.5rem !important' }}
            />
          </div>
        </div>
          </div>
        </div>
        <div className="tags flex flex-col text-center space-y-2 md:flex md:items-center md:flex-row md:text-left md:justify-between md:my-8">
          <span className="px-2">
            <CashOutline color={"#00000"} height="20px" width="20px" />
            <h3>100% Free! </h3>
          </span>
          <span className="px-2">
            <h3>No signup or credit card required</h3>
          </span>
          <span className="px-2">
            <h3>Best upscaling algorithm in the internet</h3>
          </span>
          <span className="px-2">
            <h3>100% privacy</h3>
          </span>
        </div>
        <hr></hr>
        <div className="hidden">
          <div className="results flex mx-auto">
            <div className="before text-center bold p-4 w-1/2">Before</div>
            <div className="after text-center bold p-4 w-1/2">After</div>
          </div>
          <span className="text-md float-right mr-24 p-4"> Download</span>
        </div>
        <div className="paragraph-container mt-40  ">
          <div className="flex p-8 flex-col text-center w-full md:text-left justify-center md:flex-row">
            <div className="paragraph-1-image w-full md:w-1/2 px-2 py-2">
            <div className="w-full rounded-md overflow-hidden">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/803838785?h=0df0159a0f&badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0"
                title="Vimeo Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-sm object-cover"
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
            </div>
            <div className="paragraph-1 w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold  text-center md:text-left">
                Automatic and fast
              </h1>
              <p className="text-center md:text-left">
                Upload your photo, then sit back and watch the magic happen. Our
                AI is smart - you won’t have to worry about a thing. Once you’ve
                selected your desired resolution, the tool will do its thing.
                The whole upscaling process happens in a matter of seconds, so
                you can get on with your work!
              </p>
              <div class="flex justify-center md:justify-start">
                <button className="button-cta ">Upload your Image</button>
              </div>
            </div>
          </div>
          <div className="flex p-8 flex-col justify-center  md:flex-row">
            <div className="paragraph-1 w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold text-center md:text-left ">
                Automatic and fast
              </h1>
              <p className="text-center md:text-left">
                Upload your photo, then sit back and watch the magic happen. Our
                AI is smart - you won’t have to worry about a thing. Once you’ve
                selected your desired resolution, the tool will do its thing.
                The whole upscaling process happens in a matter of seconds, so
                you can get on with your work!
              </p>
              <div class="flex justify-center md:justify-start">
                <button className="button-cta ">Upload your Image</button>
              </div>
            </div>
            <div className="paragraph-1-image w-full md:w-1/2 px-2 py-2">
            <div className="w-full rounded-md overflow-hidden">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/803838785?h=0df0159a0f&badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0"
                title="Vimeo Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-sm object-cover"
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
            </div>
          </div>
          <div className="flex p-8 flex-col justify-center md:flex-row">
            <div className="paragraph-1-image w-full md:w-1/2 px-2 py-2">
            <div className="w-full rounded-md overflow-hidden">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/803838785?h=0df0159a0f&badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=1&controls=0&title=0"
                title="Vimeo Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-sm object-cover"
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
            </div>
            <div className="paragraph-1 w-full md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold text-center md:text-left ">
                Automatic and fast
              </h1>
              <p className="text-center md:text-left">
                Upload your photo, then sit back and watch the magic happen. Our
                AI is smart - you won’t have to worry about a thing. Once you’ve
                selected your desired resolution, the tool will do its thing.
                The whole upscaling process happens in a matter of seconds, so
                you can get on with your work!
              </p>
              <div class="flex justify-center md:justify-start">
                <button className="button-cta ">Upload your Image</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-8 md:flex-row">
          <div className="FAQ text-center mb-4 md:text-left text-lg w-full md:w-1/2 ">
            <h3 className="w-3/5 mx-auto md:mx-4">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="md:w-1/2 w-full  justify-self-end">
            <Accordion
              title="Accordion 1"
              content="Lorem ipsum dolor sit amet."
            />
            <Accordion title="Accordion 2" content="Hello" />
            <Accordion title="Accordion 3" content="Ut enim ad minim veniam." />
          </div>
        </div>
      </div>
      <div className="w-full footer bg-black h-100">
        <div className="section-1">
          <span>
            <p className="text-white text-center p-4">
              Copyrights 2023 @ AI Image Tools
            </p>
          </span>
        </div>
      </div>
    </div>
  
    
  );
}

export default App;
