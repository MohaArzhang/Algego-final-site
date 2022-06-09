import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"

const Video = styled(props => <Vimeo {...props} />)`
height: 56.25vw;
left: 50%;
min-width: 177.77vh;
position: absolute;
top: 50%;
transform: translate(-50%, -50%);
width: 100vw;
`
export default function BackgroundVideo() {
  return (
    <>
      <div className="row">

        <Video
          background={true}
          height={1080}
          width={400}
          loop={true}
          responsive
          // video="247394006"
          // video="236669216"
          // video="529949088"
          video='246725146'
        />
      </div>
    </>
  )
}