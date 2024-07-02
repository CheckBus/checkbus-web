import * as S from "./style";
import Button from "components/common/Button";
import BackImg from "assets/back.svg";
import { useNavigate } from "react-router-dom";

const QRcodeCreate = () => {
  const navigate = useNavigate();
  return (
    <S.QrContainer>
      <S.BackContainer>
        <S.BackButtonContainer>
          <img src={BackImg} />
          <S.Text onClick={() => navigate("/")}>처음으로</S.Text>
        </S.BackButtonContainer>
      </S.BackContainer>

      <S.QrButtonContainer>
        <Button width={70} height={15} click={() => ""}>
          1호차(동대구역)
        </Button>
        <Button width={70} height={15} click={() => ""}>
          2호차(동대구역)
        </Button>
        <Button width={70} height={15} click={() => ""}>
          3호차(동대구역)
        </Button>
        <Button width={70} height={15} click={() => ""}>
          4호차(용산)
        </Button>
        <Button width={70} height={15} click={() => ""}>
          5호차(대곡)
        </Button>
      </S.QrButtonContainer>

      <S.Button>QR 생성하기</S.Button>
    </S.QrContainer>
  );
};

export default QRcodeCreate;
