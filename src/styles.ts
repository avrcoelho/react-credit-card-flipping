import styled, { createGlobalStyle } from 'styled-components';

type Props = {
  cvv?: boolean;
  notEmptyCard?: boolean;
  filledBackgroundColor: string | undefined;
  backgroundColor: string | undefined;
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
  }
`;

export const Container = styled.div`
  width: 300px;
  height: 171px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  perspective: 600px;
  margin: 50px;

  .card__part {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    position: absolute;
    -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    background-image: repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.05) 1px,
        rgba(255, 255, 255, 0) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.03) 4px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-linear-gradient(
        210deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 70% 70%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 90% 20%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 15% 80%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(
              255,
              255,
              255,
              0.2
            )
            70%, rgba(255, 255, 255, 0) 90%);
    background-image: repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.05) 1px,
        rgba(255, 255, 255, 0) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.03) 4px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-linear-gradient(
        210deg,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 70% 70%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 90% 20%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      repeating-radial-gradient(
        circle at 15% 80%,
        rgba(255, 255, 255, 0) 1px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.04) 3px,
        rgba(255, 255, 255, 0.05) 4px
      ),
      linear-gradient(
        -25deg,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.2) 70%,
        rgba(255, 255, 255, 0) 90%
      );
  }
  .card__front {
    background-color: ${(props: Props) =>
      props.notEmptyCard
        ? props.filledBackgroundColor || '#134869'
        : props.backgroundColor || '#DDD'};
    transform: rotateY(0);
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
    border-radius: 5px;
  }
  .card__back {
    background-color: ${(props: Props) =>
      props.cvv
        ? props.filledBackgroundColor || '#134869'
        : props.backgroundColor || '#DDD'};
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    position: relative;
    border-radius: 5px;
  }
  &.active .card__front {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
  }
  &.active .card__back {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }
  @media (max-width: 670px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Brand = styled.div`
  img {
    width: 60px;
    margin-left: 15px;
    margin-top: 16px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 15px;
`;

export const CardNumber = styled.span`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 2px;
  color: #fff;
  font-size: 19px;
`;

export const NameAndDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const CardName = styled.div`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 1px;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardExpirationDate = styled.div`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 1px;
  color: #fff;
  font-size: 15px;
`;

export const StripBlack = styled.div`
  width: 100%;
  height: 40px;
  background-color: #000;
  margin-top: 15px;
`;

export const StripWhite = styled.div`
  width: 80%;
  height: 28px;
  background-color: #f5f5f5;
  margin-top: 15px;
  margin-left: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;

  span {
    letter-spacing: 2px;
    color: #3c3c3c;
    font-size: 14px;
  }
`;
