# vr-landing-page

A Virtual Reality Landing Page With Smooth animations made with React.js and Tailwind CSS.

## Demo
![](https://github.com/patilharsh03/vr-landing-page/blob/main/demo.gif)

## Code Sample

```javascript
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

{/* modal video  */}
  <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="NOk_M1Ib5F0" onClose={() => setIsOpen(false)} />
 
{/* video  */}
  <div className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
   data-aos="fade-left"
   data-aos-offset="350">
   
```

## Tech Stack

**Technologies:** React, TailwindCSS

**Libraries/Tools:** Animation on Scroll (Aos), react-icons, react-modal-video, swiper.js


## Run Locally

Clone the project

```bash
  git clone https://github.com/patilharsh03/vr-landing-page
```

Go to the project directory

```bash
  cd vr-landing-page
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## What I Learned during building this project

I Learn about how to implement smooth transitions and animation. Also Learned about how to use Swiper.js, Aos, and react-modal-video libraries.
