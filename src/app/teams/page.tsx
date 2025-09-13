import GetInTouch from "@/components/homepage/getintouch";
import TeamGallery from "@/components/teams/gallary";
import TeamsGroup from "@/components/teams/group";
import Teambanner from "@/components/teams/teambanner";

const page = () => {
  return (
    <div>
      <Teambanner />
      <TeamsGroup />
      <TeamGallery />
      <GetInTouch />
    </div>
  );
};

export default page;
