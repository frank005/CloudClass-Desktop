import React, { FC, useState, useRef } from 'react';
import { Meta } from '@storybook/react';
import { VideoMarqueeList, VideoPlayer, VideoPlayerProps } from '~components/video-player';
import { CameraPlaceHolder } from '~components';
import { Button } from '~components/button'

const meta: Meta = {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  args: {
    size: 10,
    username: 'Lily True',
    stars: 5,
    micEnabled: true,
    whiteboardGranted: true,
    micVolume: 0.95,
    controlPlacement: 'bottom',
    placeholder: (
      <img
        src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
        alt="placeholder"
        style={{
          display: 'inline-block',
          maxHeight: '100%',
          maxWidth: '100%',
          borderRadius: 4,
        }}
      />
    ),
  },
};

export const Docs: FC<VideoPlayerProps> = ({ children, ...restProps }) => {
  return (
    <div className="m-10">
      <VideoPlayer {...restProps}>{children}</VideoPlayer>
    </div>
  );
};

const student = {
  isHost: true,
  username: 'Lily True',
  stars: 5,
  micEnabled: true,
  whiteboardGranted: true,
  cameraEnabled: true,
  micVolume: 0.95,
  controlPlacement: 'bottom',
  placeholder: (
    <CameraPlaceHolder />
    // <img
    //   src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
    //   alt="placeholder"
    //   style={{
    //     display: 'inline-block',
    //     maxHeight: '100%',
    //     maxWidth: '100%',
    //     borderRadius: 4,
    //   }}
    // />
  ),
}

export const DocsSmall: FC<VideoPlayerProps & {size: number}> = ({ children, size, ...restProps }) => {

  const list_ = [...'.'.repeat(size)].map((_, i: number) => ({
    ...student,
    username: `${i}-${student.username}`,
    uid: `uuid-${i}`,
    micEnabled: false,
    cameraEnabled: false,
    whiteboardGranted: true,
    isOnPodium: true,
    children: (<></>)
  })) as any[]

  const [list, setList] = useState(list_)
    
  return (

    //@ts-ignore
    <>
      <VideoMarqueeList 
        videoStreamList={list}
        onSendStar={(uid) => {
          return new Promise((resolve) => {
            // console.log('send star', uid)
            list.forEach(item => {
              if (item.uid === uid) {
                item.stars += 1
              }
            })
            // console.log(list)
            setList([
              ...list
            ])
            resolve('send star')
          })
        }}
        onCameraClick={(uid) => {
          return new Promise((resolve) => {
            console.log('camera click', uid)
            resolve('')
          })
        }}
        onMicClick={(uid) => {
          return new Promise((resolve) => {
            console.log('mic click', uid)
            resolve('')
          })
        }}
        onOffPodiumClick={(uid) => {
          return new Promise((resolve) => {
            console.log('podium click', uid)
            resolve('')
          })
        }}
        onWhiteboardClick={(uid) => {
          return new Promise((resolve) => {
            console.log('whiteboard click', uid)
            resolve('')
          })
        }}
      >
      </VideoMarqueeList>
    </>
  )
}

export default meta;
