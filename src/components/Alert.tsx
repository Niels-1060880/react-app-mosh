import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "danger"
    | "info"
    | "dark"
    | "light"
    | "link";
    onClose: () => void;
}

const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      {children}(
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      )
    </div>
  );
};

export default Alert;
