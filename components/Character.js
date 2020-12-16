import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Text, SimpleGrid, Box } from '@chakra-ui/react';

const Character = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='30px'>
      {characters.map((character) => {
        return (
          <motion.div
            key={character.id}
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  ease: 'easeInOut',
                  delay: 0.2 * character.id,
                },
              },
            }}
            whileHover={{
              position: 'relative',
              scale: [1, 1.4, 1.2],
              rotate: [0, -15, 15, 0],
              zIndex: 1,
              transition: {
                ease: 'easeInOut',
                duration: 0.5,
              },
            }}
          >
            <Box maxW='sm' bg='gray.100' borderRadius='lg' overflow='hidden'>
              <Image
                src={character.image}
                alt={`${character.name}´s image`}
                width={320}
                height={320}
              />
              <Box p='4'>
                <Box d='block' alignItems='center'>
                  <Heading as='h3' fontWeight='bold' align='center' size='md'>
                    {character.name}
                  </Heading>
                  <Text align='center'>Origin: {character.origin.name}</Text>
                  <Text align='center'>
                    Location: {character.location.name}
                  </Text>
                </Box>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </SimpleGrid>
  );
};

export default Character;
