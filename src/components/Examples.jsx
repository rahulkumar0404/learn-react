import { TabButton } from './TabsButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

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
      <Tabs
        buttonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedButton === 'components'}
              onClick={() => handleClickEvent('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'jsx'}
              onClick={() => handleClickEvent('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'props'}
              onClick={() => handleClickEvent('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'state'}
              onClick={() => handleClickEvent('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* <menu>
        <TabButton
          isSelected={selectedButton === 'components'}
          onClick={() => handleClickEvent('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'jsx'}
          onClick={() => handleClickEvent('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'props'}
          onClick={() => handleClickEvent('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedButton === 'state'}
          onClick={() => handleClickEvent('state')}
        >
          State
        </TabButton>
      </menu> */}
      {/* {selectedButton} replacement of the this lines of code */}
      {/* {tabContent} */}
    </Section>
  );
}
