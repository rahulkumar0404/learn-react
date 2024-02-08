import { TabButton } from './TabsButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';

export default function Examples() {
  let tabContent = 'Please click a Button!';

  const [selectedButton, setSelectedButton] = useState('');
  function handleClickEvent(selectedButton) {
    setSelectedButton(selectedButton);
    // console.log(selectedButton);
  }

  if (selectedButton != '') {
    tabContent = (
      <div id="examples">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  } else {
    tabContent = <p>Please click a button</p>;
  }
  return (
    <Section id="examples" title="EXAMPLES">
      <menu>
        <TabButton
          isSelected={selectedButton === 'components'}
          onClicked={() => handleClickEvent('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'jsx'}
          onClicked={() => handleClickEvent('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'props'}
          onClicked={() => handleClickEvent('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'state'}
          onClicked={() => handleClickEvent('state')}
        >
          State
        </TabButton>
      </menu>
      {/* {selectedButton} */}
      {tabContent}
    </Section>
  );
}
