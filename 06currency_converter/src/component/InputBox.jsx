import React,{useId} from 'react';


function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    currencyOption = [],
    selecturrency = 'usd',
    amountDisable = false,
    currecyDisable = false,



    className = "",
}) {

   const amounttInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor='amounttInputId' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id='amounttInputId'
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selecturrency}
                    onChange={(e) => onCurrencychange() && onCurrencychange(e.target.value)}
                    disabled={currecyDisable}
                >

                    {currencyOption.map((Currency) =>
                    (<option key={Currency} value="Currency">      // remember the key in loop in react it increase the performance
                        {Currency}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;