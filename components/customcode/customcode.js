import Submission from "../customcode/submission";
import Chameleonscroller from "../customcode/chameleonscroller";
import Swipehint from "../customcode/swipehint";

export default function CustomCode({ tag }) {
  return (
    (tag === "Submission" && <Submission />) ||
    (tag === "Chameleonscroller" && <Chameleonscroller />) ||
    (tag === "Swipehint" && <Swipehint />)
  );
}
