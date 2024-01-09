import type { ReactElement } from "react";

import { AllTheLatest, AnswerBodyNeeds } from "./layouts";

function App(): ReactElement {
  return (
    <div className="main">
      <div>
        <AnswerBodyNeeds />
        <AllTheLatest />
      </div>
    </div>
  );
}

export default App;
