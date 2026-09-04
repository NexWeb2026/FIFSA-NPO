import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CorporatePartnershipsPage } from "./pages/CorporatePartnershipsPage";
import { DonatePage } from "./pages/DonatePage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { EventsPage } from "./pages/EventsPage";
import { FusionFriendPage } from "./pages/FusionFriendPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OurWorkPage } from "./pages/OurWorkPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProgrammeDetailPage } from "./pages/ProgrammeDetailPage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { WorkCategoryPage } from "./pages/WorkCategoryPage";

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="our-work" element={<OurWorkPage />} />
        <Route path="our-work/:categorySlug" element={<WorkCategoryPage />} />
        <Route path="programmes/:slug" element={<ProgrammeDetailPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:slug" element={<EventDetailPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
        <Route path="fusion-friend" element={<FusionFriendPage />} />
        <Route path="corporate-partnerships" element={<CorporatePartnershipsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
