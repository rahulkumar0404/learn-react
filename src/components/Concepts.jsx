import CoreConcepts from './CoreConcepts';
import { CORE_CONCEPTS } from '../data';

export default function Concepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptsItem) => (
          <CoreConcepts key={conceptsItem.title} {...conceptsItem} />
        ))}
        {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            ></CoreConcepts>
            <CORE_CONCEPTS {...CORE_CONCEPTS[1]}></CORE_CONCEPTS>
            <CORE_CONCEPTS {...CORE_CONCEPTS[2]}></CORE_CONCEPTS>
            <CORE_CONCEPTS {...CORE_CONCEPTS[3]}></CORE_CONCEPTS> */}
      </ul>
    </section>
  );
}
