import type { ReactElement } from "react";

import DOMPurify from "dompurify";

import { Card } from "../../../components";

interface ItemCardProps {
  title: string;
  body: string | Node;
  url: string;
  thumbnail: string;
}

const ItemCard = (props: ItemCardProps): ReactElement => {
  const { title, body, url, thumbnail } = props;

  return (
    <Card>
      <figure>
        <img src={`/img/component-02/${thumbnail}`} alt={thumbnail} />
        <figcaption>
          <h2>{title}</h2>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}
          />
        </figcaption>
        <a href={url}>read more</a>
      </figure>
    </Card>
  );
};

export default ItemCard;
