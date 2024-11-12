import { ChangeEvent, useState } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'//Hoja de estilos del calendario
import 'react-date-picker/dist/DatePicker.css' //Hoja de estilos de las fechas


export default function ExpenseForm() {

  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    const isAmountField = ['amount'].includes(name)
    setExpense({
      ...expense,
      [name]: isAmountField ? Number(value) : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  return (
    <form className=" space-y-5">
      <legend className=" uppercase text-center text-2xl font-black border-b-2 border-blue-500 py-2">Nuevo Gasto</legend>

      <div className=" flex flex-col gap-2">
        <label
          htmlFor="expenseName"
          className="text-xl">
          Nombre Gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el Nombre del Gasto"
          className=" bg-slate-100 p-2"
          name="expenseName"
          onChange={handleChange} />
      </div>
      <div className=" flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade la cantidad del gasto: ej. 200"
          className=" bg-slate-100 p-2"
          name="amount"
          onChange={handleChange} />
      </div>

      <div className=" flex flex-col gap-2">
        <label
          htmlFor="category"
          className="text-xl">
          Categoria:
        </label>
        <select
          id="category"
          //placeholder="Añade la cantidad del gasto: ej. 200"
          className=" bg-slate-100 p-2"
          name="category"
          onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col gap-2">
        <label
          htmlFor="date"
          className="text-xl">
          Fecha Gasto:
        </label>
        <DatePicker
          className=" bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Registrar Gasto'}
      />
    </form>
  )
}