# ComponentHandler Implementation Guide

## Initial Context Gathering

1. **Analyze Figma Selection**:
   - Use \`get_selection()\` to examine the currently selected node(s)
   - If no selection exists, prompt the user to select a specific component node
   - Verify the selected node is a component that can be transformed

2. **Retrieve Component Information**:
   - Use \`get_component_info(nodeId)\` to extract detailed information about the component
   - Collect the component key, all component properties, and variant definitions
   - Identify any nested components or instances that might need special handling

## Component Analysis and Planning

3. **Determine Component Structure**:
   - Analyze the component's visual structure, layout, and behavior patterns
   - If the target React component implementation is unknown, request an example or props interface
   - Identify which Figma properties should map to which React props

4. **Define Transformation Strategy**:
   - Plan how to handle variants, properties, nested components and children
   - Determine if additional utilities or helper functions are needed
   - Consider edge cases and special requirements for this component

## Implementation

5. **Create Component Handler**:
   - Implement the handler using the following pattern:

\`\`\`typescript
import {
  createElement,
  defineComponentHandler,
  type InferComponentDefinition,
  type react,
} from "@seed-design/figma";

// Define component properties based on Figma definition
export type ComponentNameProperties = InferComponentDefinition<{
  // Map all component properties from Figma
  // Example:
  "PropertyName": {
    type: "VARIANT" | "TEXT" | "BOOLEAN" | "INSTANCE_SWAP",
    variantOptions?: string[], // For VARIANT type
    defaultValue?: string | boolean
  }
}>;

// Create and export the handler
export const createComponentNameHandler = (_deps: react.ComponentHandlerDeps) => defineComponentHandler<ComponentNameProperties>(
  "component-key-from-figma", // Replace with actual component key
  ({ componentProperties: props }) => {
    // Transform Figma properties to React props
    // Use conditionals for variants and property handling
    
    return createElement(
      "ComponentName", // The React component name
      {
        // Map properties appropriately
        propName: props.PropertyName.value,
        // Add additional props as needed
      },
      [], // Nested elements if any (undefined or omitted if not needed)
      "Optional comment for accessibility or development notes, use sparingly"
    );
  }
);
\`\`\`

## Validation and Testing

6. **Verify Handler Functionality**:
   - Test the handler with different component variants
   - Ensure all properties are correctly mapped and transformed
   - Check that nested components and children are handled properly

## Best Practices

- Create reusable helper functions for common transformation patterns
- Handle edge cases and optional properties gracefully
- Add descriptive comments for complex transformations
- Consider performance implications for deeply nested components
- Ensure type safety throughout the transformation process
