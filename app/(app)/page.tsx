import { getStoryblokApi } from "@storyblok/react/rsc";
import Image from "next/image";

import Heading from "./components/heading";
import Map from "./components/map";
import Text from "./components/text";

export default async function HomePage() {
  const data = await fetchData();

  return (
    <div
      id="container"
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
    >
      <section
        id="home"
        className="relative grid h-screen snap-start place-items-center overflow-x-hidden overflow-y-hidden"
      >
        <Image
          src="hero.jpg"
          alt="Shannon river view"
          className="h-full animate-ken-burns-small md:animate-ken-burns-large"
          loading="lazy"
          unoptimized
          fill
        />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image
            src="cross.svg"
            alt="cross"
            width={300}
            height={422}
            className="absolute left-[-194px] top-[-157px] fill-white"
          />
          <h1 className="text-8xl font-bold text-white">WORSHIP</h1>
          <h2 className="text-5xl font-bold tracking-widest text-white">
            together with us
          </h2>
          <h3 className="mt-[6px] text-4xl font-medium tracking-widest text-white">
            Sundays 11am
          </h3>
          <h4 className="mt-[8px] font-medium leading-none tracking-widest text-white">
            In the Gaelscoil Liatroma, Carrick-on-Shannon
          </h4>
        </div>
      </section>
      <section
        id="about"
        className="flex h-screen snap-start flex-col items-center justify-center"
      >
        <div className="mx-auto max-w-[960px] columns-2 gap-8 space-y-8">
          <div>
            <Heading>WHAT KIND OF CHURCH IS CARRICK BAPTIST CHURCH? </Heading>
            <Text>
              We are group of people who have believed on Jesus Christ for
              salvation and forgiveness of sins. We desire to follow the
              teachings of the Bible and to share the gospel and love of Christ
              with the world. We are an autonomous church holding to historic
              Baptist principles. We believe in teaching the Bible verse by
              verse. We believe in worshipping God through music, singing a
              mixture of hymns and choruses. We strive to make everyone who
              attends or visits with us feel welcome and comfortable.
            </Text>
          </div>
          <div>
            <Heading>WHEN ARE SERVICES?</Heading>
            <Text>
              On Sunday we have morning worship service at 11:00 am. Each
              service lasts about an hour and is followed by a time of
              fellowship over tea and coffee. We meet together each Thursday
              night at 6:00 pm for a midweek Bible study and prayer which also
              lasts about an hour.
            </Text>
          </div>
          <div>
            <Heading>HOW DO I GET THERE?</Heading>
            <Text>
              We are now meeting in the Gaelscoil Liatroma located at Castlecara
              Rd, Aghameeny, Carrick-On-Shannon, Co. Leitrim, N41 V2H5.
            </Text>
          </div>
          <div>
            <Heading>WHAT IS A SERVICE LIKE?</Heading>
            <Text>
              Each service lasts about an hour and includes a time of prayer,
              singing, giving, Bible reading, and Bible teaching. After the
              service, feel free to speak to our pastor if you have any
              questions about the teaching. We don’t have a dress code.
            </Text>
          </div>
          <div>
            <Heading>WHAT ABOUT MY KIDS?</Heading>
            <Text>
              Children are welcome to attend the services and there are crèche
              facilities and Sunday School classes available. Please don’t feel
              stressed about bringing your children, as we have a number of
              young families and love to have children join us.
            </Text>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex h-screen snap-start items-center justify-center"
      >
        <Map />
      </section>
      <section
        id="contact"
        className="flex h-screen snap-start items-center justify-center"
      ></section>
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}
