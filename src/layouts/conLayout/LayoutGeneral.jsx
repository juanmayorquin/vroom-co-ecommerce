import React from "react";

const LayoutGeneral = (props) => {
  const { children } = props;
  return (
    <>
      <div>LayoutGeneral</div>
      <section>
        <div>{children}</div>
      </section>
    </>
  );
};

export default LayoutGeneral;
