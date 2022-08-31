import Link from "next/link";
import React, { Children, FC } from "react";

interface Props {
  onClick?: Function;
  style?: object;
  children?: React.ReactNode; // 모든 요소의 HTML (TEXT 포함)
  type: "button" | "link";
  href?: string;
}

const Button: FC<Props> = ({ onClick, style, children, type, href = "/" }) => {
  return (
    <>
      <div>
        {type === "button" ? (
          <button
            onClick={() => {
              onClick ? onClick() : null;
            }}
            style={style}
          >
            {children}
          </button>
        ) : null}
      </div>

      <div>
        {type === "link" ? (
          <Link href={href}>
            <button
              onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}
              style={style}
            >
              {children}
            </button>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Button;
