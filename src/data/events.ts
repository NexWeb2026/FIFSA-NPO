import type { EventItem } from "../types/content";
import { images } from "./images";

export const events: EventItem[] = [
  {
    id: "life-of-musa",
    slug: "life-of-musa",
    title: "The Life of Musa (AS)",
    description:
      "A FIFSA stage production bringing one of the greatest stories to life through acting, storytelling and memorable performances.",
    category: "Events",
    venue: "Venue to be confirmed",
    image: images.stage,
    status: "Upcoming",
    registrationUrl: "/contact",
    gallery: [images.stage, images.eisteddfod],
  },
  {
    id: "high-school-nasheed",
    slug: "high-school-nasheed-competition",
    title: "Annual High School Nasheed Competition",
    description:
      "A valued community event that uplifts young voices, celebrates faith and nurtures vocal talent in a dignified space.",
    category: "Events",
    image: images.youthGroup,
    status: "Archive",
    gallery: [images.youthGroup, images.eisteddfod],
  },
  {
    id: "islamic-youth-eisteddfod",
    slug: "islamic-youth-eisteddfod",
    title: "Islamic Youth Eisteddfod",
    description:
      "Learners from Cape Town schools share poetry, spoken word and speech in a platform for confidence and expression.",
    category: "Events",
    image: images.eisteddfod,
    status: "Recent",
    gallery: [images.eisteddfod, images.youthGroup],
  },
];
