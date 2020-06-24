import React from 'react';

import ListItem from '../../components/List/List';

const Description = () => {
    return (
      <>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quia
          aliquid? Minus quis illum ad nesciunt beatae qui cumque? Quae.
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          necessitatibus. Illo, dolore. Sapiente, distinctio reprehenderit?
        </p>

        <ul class="list">
          <ListItem caption={`Close to the beach`} />
          <ListItem caption={`Breakfast include`} />
          <ListItem caption={`Free airport shuttle`} />
          <ListItem caption={`Free wifi in all rooms`} />
          <ListItem caption={`A/C and headtin`} />
          <ListItem caption={`Pets allowed`} />
          <ListItem caption={`We speak all language`} />
          <ListItem caption={`Perfect for families`} />
        </ul>
      </>
    );
}

export default Description;