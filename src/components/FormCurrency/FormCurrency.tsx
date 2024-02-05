import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import { CurrencyBox } from "../CurrencyBox";
import { Button } from "../ui";
import { roundNumber } from "../../utils/roud";

const FormCurrency = () => {
  const [from, setForm] = useState<string>("usd");
  const [to, setTo] = useState<string>("mad");
  const [amount, setAmount] = useState<number>(0);
  const [convertAmount, setConvertAmount] = useState<number>(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConvertAmount(roundNumber(amount * currencyInfo[to], 2));
  };

  const handleSwap = () => {
    setForm(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CurrencyBox
        label={"From"}
        amount={amount}
        selectCurrency={from}
        currencyOption={options}
        onAmountChange={setAmount}
        onChangeCurrency={setForm}
      />
      <div className="relative w-full h-5">
        <Button
          className="px-4 py-1 border absolute left-1/2 -top-[7px] -translate-x-1/2"
          onClick={handleSwap}
          type="button"
        >
          Swap
        </Button>
      </div>
      <CurrencyBox
        label={"To"}
        amount={convertAmount}
        selectCurrency={to}
        currencyOption={options}
        amountDisabled
        onAmountChange={setConvertAmount}
        onChangeCurrency={setTo}
      />
      <Button type="submit" className="w-full py-3 mt-5">
        Convert {from.toUpperCase()} To {to.toUpperCase()}
      </Button>
    </form>
  );
};

export default FormCurrency;
