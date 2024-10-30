import "./App.css";
import ButtonField from "./CommonComponent/ButtonField";
import InputField from "./CommonComponent/InputField";

function App() {
  return (
    <div style={{ display: "flex", alignItems:"center", flexDirection:"column"}}>
      <div style={{width: "20%"}}>
        <InputField
          type={"password"}
          maxRows={6}
          onChange={(e) => console.log(e.target.value)}
          onBlur={(e) => console.log(e.target.value)}
          onFocus={(e) => console.log(e.target.value)}
          styleBox={{ width: "auto", height: "auto" }}
          placeholder={"InputField"}
          inputLabel={"username"}
          inputLabelStyle={{ color: "red", fontSize: "20px" }}
          isError={true}
          errorMessage={"Error"}
          status={"error"}
        />
        <ButtonField onClick={() => console.log("clicked")} text={"Submit"} isLoading={true} />
        </div>
     
    </div>
  );
}

export default App;
