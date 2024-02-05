import { FormCurrency } from "./components/FormCurrency";
import { Card } from "./components/ui";

function App() {
  return (
    <div className="w-full h-screen bg-currency bg-cover bg-no-repeat flex justify-center items-center">
      <Card>
        <FormCurrency />
      </Card>
    </div>
  );
}

export default App;
