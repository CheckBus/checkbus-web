import { useNavigate } from "react-router-dom";
import * as S from "./stlye";
import Button from "components/common/Button";

const TeacherMain = () => {
  const navigate = useNavigate();
  return (
    <S.TeacherMainContainer>
      <S.TeacherMainLogo>로고</S.TeacherMainLogo>
      <S.TeacherWrap>
        <S.TeacherName>000선생님 안녕하세요!</S.TeacherName>
        <S.ButtonContainer>
          <Button
            width={40}
            height={70}
            click={() => navigate("/qrcode-generator")}
          >
            QR 생성
          </Button>
          <Button width={40} height={70} click={() => navigate("/bus-list")}>
            버스 탑승 명단 조회
          </Button>
        </S.ButtonContainer>
      </S.TeacherWrap>
    </S.TeacherMainContainer>
  );
};

export default TeacherMain;
