import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Zego_Cloud = () => {
  const {id} = useParams();
  const meeting = (element)=>{
    const appID = 1028985135;
  const serverSecret = "a6ef9a462e2a8a75bec261346d9169dd";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Math.random().toString(),  id);

  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    scenario: {
      mode: ZegoUIKitPrebuilt.LiveStreaming,
      
    },
    sharedLinks:[{name:'meeting-links',
      url:`http://localhost:5173/room/${id}`
    }],
  });
  }
  return (
    <div ref={meeting}>
      
    </div>
  )
}

export default Zego_Cloud
