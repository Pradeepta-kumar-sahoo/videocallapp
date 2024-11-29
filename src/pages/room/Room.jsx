import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();

  const mymeetings = async (element) => {
    const appId = 1412790982;
    const serverSecret = "f1461640509703328a8845a08e3684b1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "subham"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:"Copy Link",
                url:`http://localhost:3000/room/${roomId}`
            }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true
    })
  };
  return <div ref={mymeetings}></div>;
};

export default Room;
