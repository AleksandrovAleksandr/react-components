import {useState} from 'react'
import './TextField.scss'
const TextField = props => {
  const [value, setValue] = useState('')

  const onChange = e => setValue(e.target.value)

  const clear = () => {
    setValue('')
  }

  return (
    <div className="TextField">
      <label className="TextField__label" htmlFor={props.id}>
        {props.label && `${props.label}:`}
      </label>
      <div>
        <input
          className="TextField__field"
          id={props.id}
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
        />
        {props.withClearButton && (
          <button onClick={clear}>
            <span className="visually-hidden">Очистить поле ввода</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default TextField
