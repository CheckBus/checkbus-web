import * as S from "./style";

const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundNumber>404</S.NotFoundNumber>
      <S.NotFoundText>페이지를 찾을 수 없음</S.NotFoundText>
      <S.HomeButton>홈으로</S.HomeButton>
    </S.NotFoundContainer>
  );
};

export default NotFound;
