"use client";

import AboutUs from "@/components/homepage/aboutus";
import Banner from "@/components/homepage/banner";
import Blogs from "@/components/homepage/blogs";
import Getintouch from "@/components/homepage/getintouch";
import Teams from "@/components/homepage/team";
import Testimonial from "@/components/homepage/testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Blogs />
      <Teams />
      <Testimonial />
      <Getintouch />
    </div>
  );
}
