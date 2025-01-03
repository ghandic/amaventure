import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="flex flex-col bg-[#e6ecf1]">
      <div className=" h-[4700px] overflow-hidden relative">
        <div className="absolute bg-[#5496bb] h-[3025px] w-full"></div>
        <img src="/amaventure/assets/images/stars.png" alt="stars" className="w-full h-[309px] absolute top-[20px] z-50" />
        {/* Clouds 1 */}
        <div className="absolute top-[380px] h-[500px]">
          <div className="relative overflow-x-hidden h-full">
            <div className="animate-marquee flex items-center whitespace-nowrap h-full">
              <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-1" className="w-[9000px] h-full whitespace-nowrap" />
              <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-2" className="w-[9000px] h-full whitespace-nowrap" />
            </div>
            {/* <div className="absolute top-0 animate-marquee2 flex items-center whitespace-nowrap">
            <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-1" className="w-[9000px] h-full whitespace-nowrap" />
            <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-2" className="w-[9000px] h-full whitespace-nowrap" />
          </div> */}
          </div>
        </div>
        {/* Clouds 2 */}
        <div className="absolute top-[1370px] h-[500px]">
          <div className="relative overflow-x-hidden h-full">
            <div className="animate-marquee flex items-center whitespace-nowrap h-full">
              <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-1" className="w-[9000px] h-full whitespace-nowrap" />
              <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-2" className="w-[9000px] h-full whitespace-nowrap" />
            </div>
            {/* <div className="absolute top-0 animate-marquee2 flex items-center whitespace-nowrap">
            <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-1" className="w-[9000px] h-full whitespace-nowrap" />
            <img src="/amaventure/assets/images/clouds_wide.png" alt="clouds-2" className="w-[9000px] h-full whitespace-nowrap" />
          </div> */}
          </div>
        </div>
        {/* Mountains */}
        <img src="/amaventure/assets/images/bg_mountains_wide.png" alt="mountains" className="w-full h-[611px] absolute top-[2761px] z-400" />
        {/* Mountain */}
        <img src="/amaventure/assets/images/mountain.png" alt="mountain" className="w-full h-[3095px] absolute top-[310px] z-700 min-w-[940px]" />

        {/* Content */}
        <section className="mx-auto w-[960px] relative z-100">
          {/* Logo */}
          <img src="/amaventure/assets/images/amaventure_logo.png" alt="logo" className="fixed top-[46px]" />
          {/* Summit */}
          <img src="/amaventure/assets/images/summit_marker.png" alt="summit" className="absolute left-[600px] top-[230px]" />
          {/* Dablam */}
          <img src="/amaventure/assets/images/dablam_marker.png" alt="dablam" className="absolute left-[570px] top-[705px]" />
          {/* Camp 3 */}
          <img src="/amaventure/assets/images/camp_3_marker.png" alt="camp_3" className="absolute left-[700px] top-[1241px]" />

          {/* Grey Tower */}
          <img src="/amaventure/assets/images/grey_tower_marker.png" alt="grey_tower" className="absolute left-[300px] top-[1600px]" />

          {/* Camp 2 */}
          <img src="/amaventure/assets/images/camp_2_marker.png" alt="camp_2" className="absolute left-[600px] top-[1783px]" />

          {/* Yellow Tower */}
          <img src="/amaventure/assets/images/yellow_tower_marker.png" alt="yellow_tower" className="absolute left-[250px] top-[2126px]" />

          {/* Camp 1 */}
          <img src="/amaventure/assets/images/camp_1_marker.png" alt="camp_1" className="absolute left-[850px] top-[2490px]" />

          {/* Camp Half */}
          <img src="/amaventure/assets/images/camp_half_marker.png" alt="camp_half" className="absolute left-[920px] top-[2680px]" />

          {/* Base Camp */}
          <img src="/amaventure/assets/images/base_camp_marker.png" alt="base_camp_marker" className="absolute left-[600px] top-[3283px] z-100" />

          {/* Start Journey */}
          <img src="/amaventure/assets/images/start_journey.png" alt="start_journey" className="absolute left-[700px] top-[3401px]" />

          {/* Base Camp */}
          <img src="/amaventure/assets/images/base_camp.png" alt="base_camp" className="absolute left-[250px] top-[3301px]" />

          {/* Campfire */}
          <img src="/amaventure/assets/images/campfire.gif" alt="campfire" className="absolute left-[360px] top-[3381px]" />

        </section>

        <section>
          {/* Heights */}
          <img src="/amaventure/assets/images/heights.png" alt="heights" className="absolute left-[360px] top-[3581px]" />
          <div className="absolute bg-[#976d48] h-[3025px] w-full top-[4120px]"></div>
          {/* Soil */}
          <img src="/amaventure/assets/images/top_soil.png" alt="soil" className="absolute w-full top-[4050px]" />
          <img src="/amaventure/assets/images/underground.png" alt="underground" className="absolute w-full top-[4150px]" />
          <img src="/amaventure/assets/images/mantle.png" alt="mantle" className="absolute w-full top-[4550px]" />


        </section>
      </div>
    </main>
  );
}
