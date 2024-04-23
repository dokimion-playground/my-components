import Button from "./components/button/Button";
import useToastActionContext from "./components/toast/context/useToastActionContext";

function App() {
  const { toast } = useToastActionContext();
  const handleClick = () => {
    toast.success("성공");
  };

  return (
    <>
      <div style={{ width: "400px" }}>
        <Button onClick={handleClick}>토스트</Button>
      </div>
    </>
  );
}

export default App;
