import Bloglist from "@/components/blog/bloglist";
import Bloglistbanner from "@/components/blog/bloglistbanner";
import GetInTouch from "@/components/homepage/getintouch";

const page = () => {
  return (
    <div>
      <Bloglistbanner />
      <Bloglist />
      <GetInTouch />
    </div>
  );
};

export default page;
