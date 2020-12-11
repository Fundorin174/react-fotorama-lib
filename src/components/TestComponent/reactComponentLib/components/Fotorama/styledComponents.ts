import styled from 'styled-components';
const backgroundIcons  = "https://ucarecdn.com/6e89a95e-8cc6-432e-80f0-bda604645fc8/img.png"

export const Root = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
  `;

export const FullscreenOnIcon = styled.div`
width: 32px;
height: 32px;
top: -30px;
right: -30px;
background: url(${backgroundIcons}) no-repeat;
background-position: -32px -32px;
transition-property: transform,opacity;
transition-duration: .3s;
z-index: 20;
position: absolute;
cursor: pointer;
transform: translate3d(0,0,0);
`;

export const FullscreenOffIcon = styled.div`
width: 32px;
height: 32px;
top: -30px;
right: -30px;
transition-property: transform,opacity;
background: url(${backgroundIcons}) no-repeat;
background-position: 0px -32px;
transition-duration: .3s;
z-index: 20;
position: absolute;
cursor: pointer;
transform: translate3d(0,0,0);
`;

export const FotoramaArrPrev = styled.div`
transition-property: transform,opacity;
transition-duration: .3s;
opacity: 1;
left: 2px;
background: url(${backgroundIcons}) no-repeat;
background-position: 0px 0px;
position: absolute;
width: 32px;
height: 32px;
top: 50%;
margin-top: -16px;
z-index: 11;
cursor: pointer;
transform: translate3d(-48px,0,0);
`;

export const FotoramaArrNext =styled.div`
transition-property: transform,opacity;
transition-duration: .3s;
opacity: 1;
right: 2px;
background: url(${backgroundIcons}) no-repeat;
background-position: -32px 0px;
position: absolute;
width: 32px;
height: 32px;
top: 50%;
margin-top: -16px;
z-index: 11;
cursor: pointer;
transform: translate3d(48px,0,0);
`;

export const PhotoramaWrp = styled.div`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  position: relative;
  direction: ltr;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  &:hover ${FullscreenOnIcon}{
    transition-property: transform, opacity;
    transition-duration: .3s;
    transform: translate3d(-32px, 32px, 0 );
  }
  &:hover ${FullscreenOffIcon} {
    transition-property: transform, opacity;
    transition-duration: .3s;
    transform: translate3d(-32px, 32px, 0 );
}
&:hover ${FotoramaArrPrev} {
  transition-property: transform,opacity;
  transition-duration: .3s;
  transform: translate3d(2px,0,0);
}
&:hover ${FotoramaArrNext} {
  transition-property: transform,opacity;
  transition-duration: .3s;
  transform: translate3d(-2px, 0, 0);
}
`;
export const PhotoramaStage = styled.div`
cursor: pointer;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  transform: translateZ(0);
`;

export const StageShaft = styled.div`
  transition-duration: 0ms;
  width: 100%;
  margin-left: 0px;
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
`;

export const PhotoramaStageFrame = styled.div`
  left: 0px;
  z-index: 8;
  transition-property: transform,opacity;
  transition-duration: 0ms;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  transform: translateZ(0);
`;

export const StageImg = styled.img`
  width: 100%;
  height: 100%;
  left: -0.750988px;
  top: 0;
  bottom: 0;
  position: absolute;
  border: none!important;
  max-width: 99999px!important;
  max-height: 99999px!important;
  min-width: 0!important;
  min-height: 0!important;
  border-radius: 0!important;
  box-shadow: none!important;
  padding: 0!important;
`;


export const PhotoramaNavWrp = styled.div`
  display: block;
`;

export const PhotoramaNav = styled.div`
  display: block;
  font-size: 0;
  line-height: 0;
  text-align: center;
  white-space: nowrap;
  z-index: 5;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  margin: auto;
  padding: 0;
`;

export const PhotoramaNavShaft = styled.div`
  position: relative;
  left: 0;
  top: 0;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  transition-duration: .3s;
  transition-property: transform,width;
  transition-timing-function:  cubic-bezier(0.1,0,.25,1);
  cursor: grab;
  transform: translate3d(0,0,0);
`;

export const FotoramaThumbBorder = styled.div`
  transition-duration: 0.3s;
  width: 80px;
  height: 52px;
  border-width: 2px;
  margin-top: 2px;
  transition-property: transform,width;
  transition-timing-function: cubic-bezier(0.1,0,.25,1);
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  border-style: solid;
  border-color: #00afea;
  box-sizing: content-box;
  background-image:
    linear-gradient(to bottom right,rgba(255,255,255,.25),rgba(64,64,64,.1));
`;

export const PhotormaNavFrame = styled.div`
  width: 84px;
  padding: 2px;
  height: 56px;
  padding-left: 0!important;
  position: relative;
  cursor: pointer;
  box-sizing: content-box;
  display: inline-block;
  vertical-align: middle;
  margin: auto;
  outline: 0;
`;

export const PhotoramaThumb = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(127,127,127,.2);
`;

export const NavImg = styled.img`
  max-width: 100%;
`;


