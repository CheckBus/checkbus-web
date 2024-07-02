import { Route, Routes } from "react-router-dom";
import NotFound from "../components/common/NotFound";
import TeacherMainPage from "../pages/TeacherMainPage/TeacherMainPage";
import QRcodeCreatePage from "../pages/QRcodeCreatePage/QRcodeCreatePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TeacherMainPage />} />
      <Route path="/qrcode-generator" element={<QRcodeCreatePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
