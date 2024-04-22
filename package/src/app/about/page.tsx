import Animated from "@/components/Animated";

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <Animated className="flex-col mt-10 gap-8 justify-center w-10/12 hidden md:flex">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-3xl text-purple-200">About</h3>
        <p>
          Our vision at JourneyStickers is to transform ephemeral travel memories into lasting, tangible artifacts. We
          aim to create personalized laptop stickers that serve not just as decorative elements, but as personal totems
          that carry the essence of each traveler’s journey. These custom pieces act as daily reminders of adventure,
          encouraging ongoing inspiration and a continuous connection to cherished moments.
          <br />
          <br />
          Our preferred future is one where every traveler can hold onto their memories not just in their minds, but
          right at their fingertips, enhancing their everyday spaces with personalized art that tells the story of their
          journeys.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-3xl text-purple-200">JourneyStickers vs. Traditional Souvenirs</h3>
        <div className="flex gap-2">
          <fieldset className="grid gap-6 rounded-lg border p-4 w-1/2">
            <legend className="-ml-1 px-1 text-md font-medium">Generic Souvenirs</legend>
            <ul>
              <li>
                <span className="font-bold">Mass Produced</span>: Common designs that are replicated for every visitor.
              </li>
              <li>
                <span className="font-bold">Impersonal</span>: Lack a connection to your specific experiences.
              </li>
              <li>
                <span className="font-bold">Limited Variety</span>: Often limited to popular landmarks or general
                themes.
              </li>
            </ul>
          </fieldset>
          <fieldset className="grid gap-6 rounded-lg border p-4 w-1/2">
            <legend className="-ml-1 px-1 text-md font-medium">JourneyStickers</legend>
            <ul>
              <li>
                <span className="font-bold">Personalized Design</span>: Each sticker is crafted based on your unique
                travel experiences and stories.
              </li>
              <li>
                <span className="font-bold">Emotionally Resonant</span>: Captures the essence of your journey, turning
                memories into a narrative that feels personal and alive.
              </li>
              <li>
                <span className="font-bold">Exclusive Artwork</span>: You won't find these designs anywhere else. Each
                piece is a work of art that reflects specific moments from your travels.
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-3xl text-purple-200">Team</h3>
        <p>
          <div className="flex gap-2">
            <span>Yulong He,</span>
            <span>Boyu Cao,</span>
            <span>Simranjeet Dua</span>
          </div>
        </p>
      </div>
    </Animated>
  );
}
