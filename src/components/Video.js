import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

// import icons
import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div>
          <h3>Awesome experiences with virtual reality world</h3>
          {/* modal video  */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
