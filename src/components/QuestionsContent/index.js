import React from "react";

const QuestionsContent = ({ children }) => {
  return (
    <>
      <pre
        className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
        style={{ borderTop: "1px solid #e5e5e5" }}
      >
        {children}
      </pre>
    </>
  );
};

export default QuestionsContent;
