import React, { FC, useEffect, useRef, useState } from 'react';
import { FotoramaProps } from "./types";
import Hammer from "react-hammerjs";
import { FotoramaArrNext, FotoramaArrPrev, FotoramaThumbBorder, FullscreenOffIcon, FullscreenOnIcon, NavImg, PhotoramaNav, PhotoramaNavShaft, PhotoramaNavWrp, PhotoramaStage, PhotoramaStageFrame, PhotoramaThumb, PhotoramaWrp, PhotormaNavFrame, Root, StageImg, StageShaft } from './styledComponents';

export const Fotorama: FC<FotoramaProps> = ({
  photosUUID,
  width = 760,
  height = 507,
  backgrounColor = "#e9e9e9",
}) => {

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [navShaftPosition, setNavShaftPosition] = useState(0);
  const [isFullScreenMode, toggleFullScreenMode] = useState(false);
  const [currentShift, setCurrentShift] = useState(0);
  const [navShaftInitialShift, setNavShaftInitialShift] = useState(0);
  const photoramaStageRef = useRef<HTMLDivElement | null>(null);
  const photoramaNavRef = useRef<HTMLDivElement | null>(null);
  const photoramaNavShaftRef = useRef<HTMLDivElement | null>(null);
  const photoramaWrpRef = useRef<HTMLDivElement | null>(null);
  const stageShaftRef = useRef<HTMLDivElement | null>(null);
  const prevPhotoRef = useRef<HTMLDivElement | null>(null);
  const nextPhotoRef = useRef<HTMLDivElement | null>(null);
  const currPhotoRef = useRef<HTMLDivElement | null>(null);
  const navThumbBorderRef = useRef<HTMLDivElement | null>(null);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const thumbWidth = 86;
  const thumbHeight = 60;

  useEffect(() => {
    if (!isFullScreenMode) {
      photoramaStageRef.current?.setAttribute(
        "style",
        `width: ${width}px; height: ${height}px;`
      );

      photoramaNavRef.current?.setAttribute("style", `width: ${width}px;`);

      photoramaWrpRef.current?.setAttribute(
        "style",
        `background-color: ${backgrounColor};`
      );
    } else {
      photoramaWrpRef.current?.setAttribute(
        "style",
        `position: fixed; top:0px; left:0px; background-color: ${backgrounColor};`
      );
      photoramaStageRef.current?.setAttribute(
        "style",
        `width: ${windowWidth}px; height: ${windowHeight - thumbHeight}px;`
      );

      photoramaNavRef.current?.setAttribute(
        "style",
        `width: ${windowWidth}px;`
      );
    }
  }, [isFullScreenMode]);

  useEffect(() => {
    let currentWidth = isFullScreenMode ? windowWidth : width;
    loadNewImages();
    moveThumbBorder(thumbWidth);
    nextPhotoRef.current?.setAttribute("style", `left: ${currentWidth}px;`);
    prevPhotoRef.current?.setAttribute("style", `left: ${-currentWidth}px;`);
    currPhotoRef.current?.setAttribute("style", `left: 0px;`);
  }, [currentPhoto, isFullScreenMode]);

  useEffect(() => {
    stageShaftRef.current?.setAttribute(
      "style",
      `transform: translate3d(${currentShift}px, 0px, 0px);`
    );
  }, [currentShift]);

  useEffect(() => {
    photoramaNavShaftRef.current?.setAttribute(
      "style",
      `transform: translate3d(${navShaftPosition}px, 0px, 0px);`
    );
  }, [navShaftPosition]);

  const changeCurrentPhoto = (num: number) => {
    if ((num > 0 || num===0) && (num < photosUUID.length - 1 || num ===photosUUID.length - 1)) {
      setCurrentPhoto(num);
      moveNavShaftToOneCell(num, thumbWidth);
    }
  };

  const moveThumbBorder = (thumbWidth:number) => {
    navThumbBorderRef.current?.setAttribute(
      "style",
      `transform: translate3d(${currentPhoto * thumbWidth}px, 0px, 0px)`
    );
  };

  const moveNavShaftToOneCell = (i: number, thumbWidth:number) => {
    let currentWidth = isFullScreenMode ? windowWidth : width;
    let shift;
    if (
      i > currentPhoto &&
      photoramaNavShaftRef.current?.clientWidth &&
      photoramaNavShaftRef.current?.clientWidth >
      (currentWidth - navShaftPosition)
    ) {
      shift =
        photoramaNavShaftRef.current?.clientWidth -
          (currentWidth - navShaftPosition) >
          thumbWidth
          ? navShaftPosition - thumbWidth
          : currentWidth - photoramaNavShaftRef.current?.clientWidth;
      setNavShaftPosition(shift);
      setNavShaftInitialShift(navShaftInitialShift - thumbWidth);
    }

    if (i < currentPhoto && navShaftPosition < 0) {
      shift = -navShaftPosition > thumbWidth ? navShaftPosition + thumbWidth : 0;
      setNavShaftPosition(shift);
      setNavShaftInitialShift(navShaftInitialShift + thumbWidth);
    }
  };

  const onThumbClick = (i: number) => {
    moveNavShaftToOneCell(i, thumbWidth);
    setCurrentPhoto(i);
  };

  function onImagePan(e: HammerInput) {
    photoramaNavShaftRef.current && setCurrentShift(e.deltaX);
  }

  function onNavPan(e: HammerInput) {
    stageShaftRef.current && setNavShaftPosition(navShaftInitialShift + e.deltaX);
  }

  function onNavPanEnd() {
    let currentWidth = isFullScreenMode ? windowWidth : width;
    if (photoramaNavShaftRef.current) {
      if (navShaftPosition > 0) {
        setNavShaftPosition(0);
        setNavShaftInitialShift(0);
      }
      else if (
        navShaftPosition <
        currentWidth - photoramaNavShaftRef.current.clientWidth
      ) {
        setNavShaftPosition(
          currentWidth - photoramaNavShaftRef.current.clientWidth
        );
        setNavShaftInitialShift(
          currentWidth - photoramaNavShaftRef.current.clientWidth
        );
      } else {
        setNavShaftInitialShift(navShaftPosition);
      }
    } 

  }

  function onImagePanEnd(e: HammerInput) {
    if (stageShaftRef.current) {
      if (e.deltaX > 0 && currentPhoto !== 0) {
        changeCurrentPhoto(currentPhoto - 1);
        setCurrentShift(0);
      }
      if (e.deltaX > 0 && currentPhoto === 0) {
        setCurrentShift(0);
      }
      if (e.deltaX < 0 && currentPhoto !== photosUUID.length - 1) {
        changeCurrentPhoto(currentPhoto + 1);
        setCurrentShift(0);
      }
      if (e.deltaX < 0 && currentPhoto === photosUUID.length - 1) {
        setCurrentShift(0);
      }
    }
    
  }

  const loadNewImages = () => {
    let loadedImgsUUID = [];
    if (currentPhoto === 0) {
      loadedImgsUUID = [photosUUID[0], photosUUID[1]];
    } else if (
      currentPhoto === photosUUID.length - 1 &&
      photosUUID.length !== 1
    ) {
      loadedImgsUUID = [
        photosUUID[photosUUID.length - 2],
        photosUUID[photosUUID.length - 1],
      ];
    } else {
      loadedImgsUUID = [
        photosUUID[currentPhoto - 1],
        photosUUID[currentPhoto],
        photosUUID[currentPhoto + 1],
      ];
    }

    return loadedImgsUUID.map((uuid, i) => {
      let currentWidth = isFullScreenMode ? windowWidth : width;
      let currentHeight = isFullScreenMode ? windowHeight : height;

      const isPrevPhoto = i === 0 && currentPhoto !== 0;
      const isNextPoto = i === 2 || (i === 1 && currentPhoto === 0);
      return (
        <PhotoramaStageFrame
          key={i}
          ref={
            isPrevPhoto
              ? prevPhotoRef
              : isNextPoto
                ? nextPhotoRef
                : currPhotoRef
          }
        >
          <Hammer onPan={onImagePan} onPanEnd={onImagePanEnd}>
            <StageImg
              src={`https://ucarecdn.com/${uuid}/-/scale_crop/${currentWidth}x${currentHeight}/smart_faces/`}
              alt={`photo${i}`}
            />
          </Hammer>
        </PhotoramaStageFrame>
      );
    });
  };

  const navImages = photosUUID.map((uuid, i) => {
    return (
      <PhotormaNavFrame
        key={i}
        onClick={() => onThumbClick(i)}
      >
        <PhotoramaThumb>
          <Hammer onPan={onNavPan} onPanEnd={onNavPanEnd}>
            <NavImg
              src={`https://ucarecdn.com/${uuid}/-/scale_crop/84x56/center/`}
              alt={`photo${i}`}
            />
          </Hammer>
        </PhotoramaThumb>
      </PhotormaNavFrame>
    );
  });

  return (
    <Root>
      <PhotoramaWrp ref={photoramaWrpRef}>
        <PhotoramaStage ref={photoramaStageRef}>
          {!isFullScreenMode ? (
            <FullscreenOffIcon
              onClick={() => toggleFullScreenMode(!isFullScreenMode)}
            />
          ) : (
              <FullscreenOnIcon
                onClick={() => toggleFullScreenMode(!isFullScreenMode)}
              />
            )}
          <StageShaft
            ref={stageShaftRef}
          >
            {loadNewImages()}
          </StageShaft>
          <FotoramaArrPrev
            onClick={() => changeCurrentPhoto(currentPhoto - 1)}
          />
          <FotoramaArrNext
            onClick={() => changeCurrentPhoto(currentPhoto + 1)}
          />          
        </PhotoramaStage>
        <PhotoramaNavWrp>
          <PhotoramaNav ref={photoramaNavRef}>
            <PhotoramaNavShaft
              ref={photoramaNavShaftRef}
            >
              <FotoramaThumbBorder
                ref={navThumbBorderRef}
              />
              {navImages}
            </PhotoramaNavShaft>
          </PhotoramaNav>
        </PhotoramaNavWrp>
      </PhotoramaWrp>
    </Root>
  );
};
