import type { ReactElement } from "react";

import PhotoModal from "./components/PhotoModal";
import Description from "./components/Description";

const AnswerBodyNeeds = (): ReactElement => {
  return (
    <div className="answers-body-needs-container">
      <div className="wrapper _diff">
        <PhotoModal />
        <Description />
      </div>
    </div>
  );
};

export default AnswerBodyNeeds;
