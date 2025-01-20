import { differences } from "../data";
import Button from "./Button/Button";

export default function DifferencesSection() {
  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button
        isActive={contentType === 'way'}
        onClick={() => handleClick('way')}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === 'easy'}
        onClick={() => handleClick('easy')}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === 'program'}
        onClick={() => handleClick('program')}
      >
        Концентрация
      </Button>

      {/* {contentType ? <p>{differences[contentType]}</p> : <p>Press button</p>} */}

      {!contentType && <p>Press button</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {tabContent}

    </section>
  )
}