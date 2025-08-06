import {
  createElement,
  defineComponentHandler,
  type InferComponentDefinition,
  type react,
} from "@seed-design/figma";

export type DropdownProperties = InferComponentDefinition<{
  Size: {
    type: "VARIANT";
    variantOptions: ["Medium", "Small"];
    defaultValue: "Medium";
  };
  Variant: {
    type: "VARIANT";
    variantOptions: ["Primary", "Secondary"];
    defaultValue: "Primary";
  };
  State: {
    type: "VARIANT";
    variantOptions: ["Default", "Open"];
    defaultValue: "Default";
  };
  Placeholder: {
    type: "TEXT";
    defaultValue: "선택해주세요";
  };
  UsePortal: {
    type: "BOOLEAN";
    defaultValue: false;
  };
}>;

export const createDropdownHandler = (_deps: react.ComponentHandlerDeps) =>
  defineComponentHandler<DropdownProperties>(
    "e918ae783158c34f35c2d9c49f2e6aa4ae27e418",
    ({ componentProperties: props }) => {
      const size = props.Size.value.toLowerCase() as "medium" | "small";
      const variant = props.Variant.value.toLowerCase() as
        | "primary"
        | "secondary";
      const placeholder = props.Placeholder.value;
      const usePortal = props.UsePortal.value;

      return createElement(
        "Dropdown",
        {
          size,
          variant,
          placeholder,
          usePortal,
          items: [],
          onChange: () => {},
        },
        undefined,
        {
          comment:
            "Dropdown component handler - items and onChange should be provided by parent",
        },
      );
    },
  );
