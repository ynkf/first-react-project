import Code from './Code';
import Welcome from './Welcome';

export default function ConditionalComponent() {
  let messageOne = <h1>This is message 1</h1>;
  let messageTwo = <h1>This is message 2</h1>;

  const display = false;

  return display ? <Welcome /> : <Code />;
}
