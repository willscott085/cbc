"use client";

import { Sermon } from "@prisma/client";
import format from "date-fns/format";
import { useState } from "react";

import AudioPlayer from "../../components/audio-player";

interface Props {
  sermons: Sermon[];
}

export default function SermonList(props: Props) {
  const { sermons } = props;

  const [selected, setSelected] = useState<Sermon>();

  const handleSermonClick = (sermon: Sermon) => {
    setSelected(sermon);
  };

  const metadata =
    selected &&
    `${selected.pastor.name} • ${format(selected.date, "yyyy-MM-dd")}`;

  return (
    <>
      <div>
        <AudioPlayer
          src={selected?.url}
          title={selected?.title}
          metadata={metadata}
        />
      </div>
      <ul>
        {sermons.map(({ pastor, date, title, url, id }) => (
          <li key={id}>
            <button
              onClick={() =>
                handleSermonClick({ pastor, date, title, url, id })
              }
            >
              {format(date, "yyyy-MM-dd")} {title} - {pastor.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
