import React from "react";
import Button from "./Button";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CvDavideTatone.pdf";
  link.setAttribute("download", "CvDavideTatone.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadButton = (props) => {
  return (
    <Button variant="primary" onClick={handleDownloadCV} {...props}>
      Download Cv
    </Button>
  );
};

export default DownloadButton;
