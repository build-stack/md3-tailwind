import type { Meta, StoryObj } from '@storybook/react-vite';
import { Display, Body } from './../index';

const meta: Meta = {
  title: 'Typography/Primitives',
};
export default meta;

export const Sizes: StoryObj = {
  render: () => (
    <main style={{ padding: 24 }}>
      <section style={{ marginBottom: 24 }}>
        <Display size="large">Display Large</Display>
        <Display size="medium">Display Medium</Display>
        <Display size="small">Display Small</Display>
      </section>
      <section>
        <Body size="large">Body Large</Body>
        <Body size="medium">Body Medium</Body>
        <Body size="small">Body Small</Body>
      </section>
    </main>
  ),
};
