import React from "react";

import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeetings = async (element) => {
    const appId = process.env.APP_ID;
    const serverSecret = process.env.SERVER_SECRET
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "ricky"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
        container:element,
        scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        }
    )
  };

  return <div>
    <div ref={myMeetings}/>
  </div>;
};

export default RoomPage;
