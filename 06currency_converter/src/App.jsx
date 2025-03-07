import { useState } from 'react'

import { InputBox } from './component';
import useCurrencyInfo from './hooks/usecurrencyinfo';

function App() {
  const [country,setcountry]=useState({})

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyinfo = useCurrencyInfo(from)

  const option = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)

  }

  const convert = () => {
    setconvertedAmount(amount * currencyinfo[to])


     // FOR SHOW CONTERY
     fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched data:", data['usd']); // ✅ Now logs fetched data correctly

      setcountry(data);  // ✅ Corrected state update

    });
     
  }


  

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1"> {country[from]}
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={option}
                  onCurrencychange={(currency) =>setfrom(currency)
                    
                  }
                  selectCurrency={from}
                  onAmountchange={(amount)=>setamount(amount)
                    
                  }
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4"> {country[to]}
                <InputBox
                  label="To"
                 amount={convertedAmount}
                  currencyOption={option}
                  onCurrencychange={(currency) =>setto(currency)
                    
                  }
                  selectCurrency={to}
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()} 
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
