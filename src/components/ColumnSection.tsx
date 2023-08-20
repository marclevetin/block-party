import * as React from "react";

function ColumnSection({ children }: React.PropsWithChildren) {
  return <section className="break-inside-avoid-column">{children}</section>;
}

export default ColumnSection;
