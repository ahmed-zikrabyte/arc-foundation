import Blogdetails from "@/components/blog/blogdetails";
import StayUpdated from "@/components/blog/comment";
import Relatedblogs from "@/components/blog/relatedblog";
import GetInTouch from "@/components/homepage/getintouch";

export default function Page() {
  return (
    <div>
      <Blogdetails />
      <Relatedblogs />
      <StayUpdated />
      <GetInTouch />
    </div>
  );
}
