type MDXComponents = ReturnType<typeof import("@mdx-js/react").useMDXComponents>;
import { Display, Body } from "@build-stack/md3-tailwind";

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: (props) => <Display size="large" {...props} />,
    h2: (props) => <Display size="medium" {...props} />,
    p: (props) => <Body size="medium" {...props} />,
    ...components,
  };
}


