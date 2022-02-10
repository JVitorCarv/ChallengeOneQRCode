import { Button } from "@material-ui/core";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #21419e;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content {
    display: flex;
    padding: 10px;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .content-left {
      display: flex;
      align-items: center;
    }

    .image-container {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border: 1px #ffffff solid;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 31px;
        height: 31px;
      }
    }

    .button-icon {
      margin-right: 10px;
      color: white;
    }

    h1 {
      color: #ffffff;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      margin: 0 0 0 10px;
    }
  }
`;

export const StyledManual = styled.div`
  font-family: Roboto;
  font-style: normal;
  padding: 10px;

  h1 {
    font-weight: 500;
    font-size: 20px;
    color: #000000;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    letter-spacing: 0.15px;
    color: #1a1a1a;
  }

  .image-qr {
    display: flex;
    justify-content: center;

    img {
      width: 200px;
      height: 149px;
    }
  }

  .action-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .instructions {
    h1 {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      letter-spacing: 0.15px;
      color: #1a1a1a;
    }
    div {
      display: flex;

      span {
        font-weight: bold;
        font-size: 16px;
        color: #1a1a1a;
        margin-right: 10px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        letter-spacing: 0.15px;
        color: #1a1a1a;
        margin: 0;
      }
    }
  }
`;

export const StyledScanQr = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #1a1a1a;
  }

  section {
    > div {
      box-shadow: rgba(141, 197, 68, 1) 0px 0px 0px 5px inset !important;
      width: 120% !important;
      height: 120% !important;
      left: -20px !important;
      top: -20px !important;
    }
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      margin: 10px;
    }
  }

  .code-content {
    margin-top: 20px;
  }

  .scan-qr {
    display: flex;
    justify-content: center;
    width: 223px;
    height: 223px;
  }

  .details {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #333333;
  }
`;

export const ButtonSecondary = styled(Button)`
  color: rgba(33, 65, 158, 1);
`;

export const ButtonPrimary = styled(Button)`
  background: #8dc544;
  color: white;

  &:hover {
    color: #8dc544;
  }
`;
