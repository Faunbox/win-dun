import { extendVariants, Input, Textarea } from "@nextui-org/react";

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      black: {
        inputWrapper: ["border-black border-1"],
      },
    },
  },
  defaultVariants: {
    color: "black",
  },
});

export const MyTextArea = extendVariants(Textarea, {
  variants: {
    color: {
      black: {
        inputWrapper: ["border-black border-1"],
      },
    },
  },
  defaultVariants: {
    color: "black",
  },
});
