import { Dispatch, FC, SetStateAction } from "react";

interface CurrencyBoxProps {
  label: string;
  amount: number;
  onAmountChange: Dispatch<SetStateAction<number>>;
  selectCurrency: string;
  currencyOption: string[];
  amountDisabled?: boolean;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}

const CurrencyBox: FC<CurrencyBoxProps> = (props) => {
  const {
    label,
    amount,
    onAmountChange,
    onChangeCurrency,
    selectCurrency,
    currencyOption,
    amountDisabled = false,
  } = props;

  return (
    <div className="bg-white flex p-5 justify-between rounded">
      <div className="w-1/2 flex flex-col gap-y-2">
        <label htmlFor={label} className="text-gray-400">
          {label}
        </label>
        <input
          id={label}
          type="number"
          className="outline-none rounded border border-gray-300"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>
      <div className=" flex flex-col gap-y-2">
        <p className="text-gray-400">Currency Type</p>
        <select
          value={selectCurrency}
          className="bg-gray-100 h-[24px] outline-none rounded"
          onChange={(e) => onChangeCurrency(e.target.value)}
          disabled={amountDisabled }
        >
          {currencyOption.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyBox;
