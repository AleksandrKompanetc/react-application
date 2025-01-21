import Button from "./Button/Button";

export default function EffectSection() {
  function openModal() {

  }
  
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open Info</Button>
    </section>
  )
}