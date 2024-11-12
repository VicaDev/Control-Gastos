import { useMemo, useState } from "react"

export default function BudgetForm() {

  const [budget, setBudget] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0 //Comprueba si el presupuesto es igual o menor a 0 o si no hay número definido
  }, [budget])

  return (
    <form className=" space-y-5">
      <div className=" flex flex-col space-y-5">
        <label htmlFor="" className=" text-4xl text-blue-600 font-bold text-center">
          Definir Presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className=" w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definit Presupuesto"
        className=" bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  )
}