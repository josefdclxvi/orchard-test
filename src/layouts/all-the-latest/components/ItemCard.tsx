import type { ReactElement, MouseEvent } from "react";

import DOMPurify from "dompurify";

import { Card } from "../../../components";

interface ItemCardProps {
  id: string;
  title: string;
  body: string | Node;
  url: string;
  thumbnail: string;
}

const ItemCard = (props: ItemCardProps): ReactElement => {
  const { id, title, body, url, thumbnail } = props;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const { id } = event.currentTarget;
    console.log("id = ", id);
  };

  return (
    <Card className="__fx">
      <figure>
        <img src={`/img/component-02/${thumbnail}`} alt={thumbnail} />
        <div className="border-line" />
        <figcaption>
          <h3>{title}</h3>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}
          />
        </figcaption>
        <a href={url} id={id} onClick={(event) => handleClick(event)}>
          read more
        </a>
      </figure>
    </Card>
  );
};

export default ItemCard;
