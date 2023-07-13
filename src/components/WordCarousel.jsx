import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

export default function WordCarousel ({ words }) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === words.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [index]);
  
    return (
      <div>
        {words.map((word, i) => {
          if (i === index) {
            return( 
                <Text fontWeight='bold' fontSize='l' key={word}>
                    {word}
                </Text>
                );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

