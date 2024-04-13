import { Widget } from "./Widget/Widget";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#fff',
        backgroundColor:'#000',
      }}
    >
      <Widget></Widget>
    </div>
  );
};
