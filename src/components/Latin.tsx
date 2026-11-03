import { Fragment } from "react";

// Keeps English terms (React, Node.js...) as their own left-to-right runs inside
// Arabic text, so nearby commas and periods don't jump to the wrong side.
const LATIN = /([A-Za-z][A-Za-z0-9.+#-]*(?: [A-Z][A-Za-z0-9.+#-]*)*)/g;

const Latin = ({ children }: { children: string }) => (
  <>
    {children.split(LATIN).map((part, i) =>
      i % 2 === 1 ? (
        <bdi key={i} dir="ltr">
          {part}
        </bdi>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    )}
  </>
);

export default Latin;
