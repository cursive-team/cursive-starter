import * as React from "react";
import type * as Classed from "@tw-classed/react";
import { classed } from "@tw-classed/react";
import { cn } from "@/helpers/utils";
import { Icons } from "../Icons";

const ButtonComponent = classed.button(
  "font-base flex items-center disabled:opacity-20 disabled:pointer-events-none w-full flex focus:ring-0 focus:outline-none active:scale-95",
  {
    variants: {
      size: {
        small: "px-4 py-1 text-sm font-normal leading-5",
        medium: "py-[12px] px-[16px] text-[14px] leading-[19px] font-bold",
      },
      variant: {
        primary: "bg-primary text-white border border-primary",
        secondary: "bg-secondary text-white border border-secondary",
        tertiary: "bg-tertiary text-white border border-tertiary",
      },
      rounded: {
        true: "rounded-[4px]",
      },
      align: {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
      rounded: true,
      align: "center",
    },
    compoundVariants: [
      {
        size: "medium",
        variant: "transparent",
        className: "!py-0",
      },
    ],
  }
);

type ButtonVariants = Classed.VariantProps<typeof ButtonComponent>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean;
  icon?: any;
  iconPosition?: "left" | "right";
}

const IconVariants: Record<NonNullable<ButtonVariants["size"]>, string> = {
  small: "w-3 h-3",
  medium: "w-3 h-3",
};
const LoadingSpinner = ({ size }: Pick<ButtonProps, "size">) => {
  const iconSize = IconVariants[size ?? "medium"];

  return (
    <div role="status">
      <Icons.Spinner iconSize={iconSize} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      loading,
      icon,
      rounded,
      disabled,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    return (
      <ButtonComponent
        ref={ref}
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={loading || disabled}
        className={cn({
          "flex-row-reverse": iconPosition === "right",
        })}
        type="button"
        {...props}
      >
        {(loading || icon) && (
          <div>{loading ? <LoadingSpinner size={size} /> : icon}</div>
        )}
        <>{children}</>
      </ButtonComponent>
    );
  }
);

Button.displayName = "Button";

export { Button };
