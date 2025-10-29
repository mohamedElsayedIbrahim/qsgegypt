import React from "react";
import NewsCardLarge from "./NewsCardLarge";
import NewsCardSmall from "./NewsCardSmall";
import type { NewsItem } from "../../interfaces/Components";

interface Props {
  news: NewsItem[];
}

const NewsList: React.FC<Props> = ({ news }) => {
  if (news.length === 0) return null;

  const [first, ...rest] = news;

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <NewsCardLarge news={first} index={0} />
      <div>
        {rest.map((item, idx) => (
          <NewsCardSmall key={idx} news={item} index={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
