import type * as Classed from "@tw-classed/react";
import { classed } from "@tw-classed/react";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputWrapper, InputWrapperProps } from "./InputWrapper";

const InputComponent = classed.input(
  "min-h-5 py-[5px] pl-1 rounded-lg placeholder-black/40 leading-[20px] rounded-none w-full text-black !outline-none shadow-none focus:border focus:ring-0 focus:outline-none focus:shadow-none focus:outline-offset-0 focus:ring-offset-0 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-transparent border border-primary",
      },
      hasError: {
        true: "!border-b-error",
      },
    },
    defaultVariants: {
      variant: "primary",
      hasError: false,
    },
  }
);

type InputComponentVariants = Classed.VariantProps<typeof InputComponent>;

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "ref">,
    InputComponentVariants,
    Pick<InputWrapperProps, "label" | "description" | "error"> {
  loading?: boolean;
  icon?: React.ReactNode;
  textSize?: "xs" | "sm" | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      variant,
      placeholder,
      description,
      icon,
      textSize,
      error,
      className,
    } = props;

    return (
      <InputWrapper
        size={textSize}
        label={label}
        description={description}
        error={error}
        className={className}
      >
        <label className="relative form-control w-full">
          <div className="relative">
            {icon && (
              <div className="pointer-events-none w-8 h-8 absolute top-[3.5px] transform left-1">
                <span className="text-gray-10">{icon}</span>
              </div>
            )}
            <InputComponent
              ref={ref}
              {...props}
              placeholder={placeholder}
              variant={variant}
              hasIcon={!!icon}
              hasError={!!error}
              autoComplete="off"
            />
          </div>
        </label>
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

export { Input };
