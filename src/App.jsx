import { Button } from "antd";
const App = () => {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>

        <Button type="link">Link Button</Button>
      </div>
    </>
  );
};
export default App;
